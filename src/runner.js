const apiURL = require('./utils/api.js');
const readUserConfig = require('./utils/config.js');
const config = readUserConfig();

const runner = function (code, options) {
  if (!config.apiKey || !config.apiKey.length) {
    throw new Error(
      'API Key is required to run wax-dev. Please reach out to technology@wallyax.com to get your API Key.'
    );
  }
  let configRules = [];
  if (config.rules) {
    configRules = config.rules;
  } else if (options) {
    configRules = options.rules;
  }
  return new Promise((resolve, reject) => {
    fetch(apiURL + '?apiKey=' + config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ element: code, rules: configRules }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

module.exports = runner;
