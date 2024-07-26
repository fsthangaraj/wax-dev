const runner = require('./src/runner');

const runWax = (htmlContent, options) => {
  return runner(htmlContent, options);
};

const runUrlWax = (url, options) => {
  return runner(url, options);
};

module.exports = runWax;
module.exports.runWax = runWax;
module.exports.runUrlWax = runUrlWax;

