const apiURL = require('./utils/api.js');

// Debounce function to limit how often a function is executed
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Define styles for different severity levels
const styles = {
  severe: 'color: #ffb3b3; font-weight: bold;',
  moderate: 'color: #ffd500; font-weight: bold;',
  minor: 'color: white; font-weight: bold;',
  default: 'font-weight: bold;'
};

const runner = (React, ReactDOMServer, options) => {
  let config = {};
  if (!options || !options.apiKey) {
    throw new Error(
      'API Key is required to run wax-dev. Please reach out to technology@wallyax.com to get your API Key.'
    );
  } else {
    config = options;
  }

  const component = React.createElement(options.component);
  const code = ReactDOMServer.renderToString(component); // Render the component to a string

  const checkAccessibility = () => {
    return new Promise((resolve, reject) => {
      fetch(apiURL + '?apiKey=' + config.apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ element: code, rules: config.rules }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Group the results by severity
          const groupedResults = data.reduce((acc, item) => {
            if (!acc[item.severity]) {
              acc[item.severity] = [];
            }
            acc[item.severity].push(item);
            return acc;
          }, {});

          // Log the results in a collapsible format
          console.groupCollapsed('%cAccessibility Check Results', styles.default);
          Object.keys(groupedResults).forEach((severity) => {
            console.groupCollapsed(`%c${severity} issues`, styles[severity] || styles.default);
            groupedResults[severity].forEach((issue) => {
              console.groupCollapsed(`Element: %c${issue.element}`, styles[severity] || styles.default);
              console.log(`%cMessage: %c${issue.message}`, styles.default, styles[severity] || styles.default);
              console.log(`%cDescription: %c${issue.description}`, styles.default, styles[severity] || styles.default);
              console.groupEnd();
            });
            console.groupEnd();
          });
          console.groupEnd();

          resolve(data);
        })
        .catch((error) => {
          console.log('Error running accessibility check:', error);
          reject(error);
        });
    });
  };

  const debouncedCheck = debounce(checkAccessibility, 500);

  // Run the check initially
  checkAccessibility();

  // Set up MutationObserver to watch for DOM changes
  const observer = new MutationObserver(debouncedCheck);

  // Start observing the document body for changes
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });

  // Return a cleanup function to disconnect the observer when no longer needed
  return () => observer.disconnect();
};

module.exports = runner;
