const {apiUrl}= require('./utils/api.js');

const runner = function (code, options) {
  let config = {};
  if (!options && !options?.apiKey) {
    const readUserConfig = require('./utils/config.js');
    config = readUserConfig();
  } else {
    config = options;
  }
  if (!config.apiKey || !config.apiKey.length) {
    throw new Error(
      'API Key is required to run wax-dev. Please reach out to technology@wallyax.com to get your API Key.'
    );
  }
  return new Promise((resolve, reject) => {
    fetch(apiUrl + '?apiKey=' + config.apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: code }),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

module.exports = runner;