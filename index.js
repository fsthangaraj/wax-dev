const runner = require('./src/runner');

const runWax = (htmlContent, options) => {
    return runner(htmlContent, options);
  };

module.exports = runWax;
