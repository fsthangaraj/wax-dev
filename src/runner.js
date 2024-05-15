const apiURL = require('./utils/api.js');

const runner = function (code) {
    return new Promise((resolve, reject) => {
      fetch(apiURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ element: code })
      })
          .then(response => response.json())
          .then(data => {console.log(data); resolve(data)} )
          .catch(error => reject(error));
    });
  };

  module.exports = runner;