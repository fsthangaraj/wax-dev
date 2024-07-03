import * as rIC from 'requestidlecallback';
import after from './after';

const runner = require('./src/runner');

const requestIdleCallback = rIC.request;
const cancelIdleCallback = rIC.cancel;

let React;
let ReactDOM;
let waxConfig;
let mutationObserver;

// contrasted against Chrome default color of #ffffff
const lightTheme = {
  serious: '#d93251',
  minor: '#d24700',
  text: 'black'
};

// contrasted against Safari dark mode color of #535353
const darkTheme = {
  serious: '#ffb3b3',
  minor: '#ffd500',
  text: 'white'
};

const theme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? darkTheme
    : lightTheme;

const critical = `color:${theme.serious};font-weight:bold;`;
const serious = `color:${theme.serious};font-weight:normal;`;

let idleId;
let timeout;
let context;
let conf;
let _createElement;
const components = {};
const nodes = [document.documentElement];

function debounce(func, wait, immediate) {
  let _timeout;
  return function (...args) {
    const later = () => {
      _timeout = null;
      if (!immediate) func.apply(this, args);
    };
    const callNow = immediate && !_timeout;
    clearTimeout(_timeout);
    _timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, args);
  };
}

function getPath(node) {
  const path = [node];

  while (node && node.nodeName.toLowerCase() !== 'html') {
    path.push(node.parentNode);
    node = node.parentNode;
  }
  if (!node || !node.parentNode) {
    return null;
  }
  return path.reverse();
}

function getCommonParent(nodes) {
  let path = null;
  let nextPath = null;
  if (nodes.length === 1) {
    return nodes.pop();
  }
  while (!path && nodes.length) {
    path = getPath(nodes.pop());
  }
  while (nodes.length) {
    nextPath = getPath(nodes.pop());
    if (nextPath) {
      path = path.filter((node, index) => {
        return nextPath.length > index && nextPath[index] === node;
      });
    }
  }
  return path ? path[path.length - 1] : document;
}

function logFailureMessage(node, key) {
  console.error(message);
}

function failureSummary(node, key) {
  if (node[key].length > 0) {
    logElement(node, console.groupCollapsed);
    logHtml(node);
    logFailureMessage(node, key);

    let relatedNodes = [];
    node[key].forEach(check => {
      relatedNodes = relatedNodes.concat(check.relatedNodes);
    });

    if (relatedNodes.length > 0) {
      console.groupCollapsed('Related nodes');
      relatedNodes.forEach(relatedNode => {
        logElement(relatedNode, console.log);
        logHtml(relatedNode);
      });
      console.groupEnd();
    }

    console.groupEnd();
  }
}

function checkAndReport(node, timeout) {
  const disableDeduplicate = conf['disableDeduplicate'];

  if (idleId) {
    cancelIdleCallback(idleId);
    idleId = undefined;
  }

  return new Promise((resolve, reject) => {
    nodes.push(node);
    idleId = requestIdleCallback(
      () => {
        let n = context;

        if (n === undefined) {
          n = getCommonParent(nodes.filter(node => node.isConnected));
          if (n.nodeName.toLowerCase() === 'html') {
            // if the only common parent is the body, then analyze the whole page
            n = document.body;
          }
        }
        const serializer = new XMLSerializer();
        const renderedStringss = serializer.serializeToString(n);
        runner(renderedStringss, waxConfig)
      },
      {
        timeout: timeout
      }
    );
  });
}

function checkNode(component) {
  let node;

  try {
    node = ReactDOM.findDOMNode(component);
  } catch (e) {}

  if (node) {
    checkAndReport(node, timeout);
  }
}

function componentAfterRender(component) {
  const debounceCheckNode = debounce(checkNode, timeout, true);
  after(component, 'componentDidMount', debounceCheckNode);
  after(component, 'componentDidUpdate', debounceCheckNode);
}

function addComponent(component) {
  const reactInstance = component._reactInternalInstance || {};
  const reactInstanceDebugID = reactInstance._debugID;
  const reactFiberInstance = component._reactInternalFiber || {};
  const reactFiberInstanceDebugID = reactFiberInstance._debugID;
  const reactInternals = component._reactInternals || {};
  const reactInternalsDebugID = reactInternals._debugID;

  if (reactInstanceDebugID && !components[reactInstanceDebugID]) {
    components[reactInstanceDebugID] = component;
    componentAfterRender(component);
  } else if (
    reactFiberInstanceDebugID &&
    !components[reactFiberInstanceDebugID]
  ) {
    components[reactFiberInstanceDebugID] = component;
    componentAfterRender(component);
  } else if (reactInternalsDebugID && !components[reactInternalsDebugID]) {
    components[reactInternalsDebugID] = component;
    componentAfterRender(component);
  }
}

function observeDOMChanges() {
  if (!mutationObserver) {
    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        checkAndReport(mutation.target, timeout);
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }
}

export default function runWax(
  _React,
  _ReactDOM,
  _timeout,
  _waxConfig = {},
  _conf = {},
  _context,
  _logger
) {
  React = _React;
  ReactDOM = _ReactDOM;
  timeout = _timeout;
  waxConfig = _waxConfig;
  context = _context;
  conf = _conf;

  if (!_createElement) {
    _createElement = React.createElement;

    React.createElement = function (...args) {
      const reactEl = _createElement.apply(this, args);

      if (reactEl._owner && reactEl._owner._instance) {
        addComponent(reactEl._owner._instance);
      } else if (reactEl._owner && reactEl._owner.stateNode) {
        addComponent(reactEl._owner.stateNode);
      }
      return reactEl;
    };
  }

  observeDOMChanges();

  return checkAndReport(document.body, timeout);
}
