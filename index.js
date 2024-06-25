const runner = require('./src/runner');
const ReactDOMServer = require('react-dom/server'); // Import ReactDOMServer for server-side rendering

const runWax = (React, ReactDOMServer, options) => {
  return runner(React, ReactDOMServer, options);
};

module.exports = runWax;