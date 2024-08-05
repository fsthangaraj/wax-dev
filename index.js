const runnerHtml = require('./src/runnerHtml');
const runnerUrl = require('./src/runnerUrl');

const runWax = (htmlContent, options) => {
  return runnerHtml(htmlContent, options);
};

const runWaxUrl = (url, options) => {
  return runnerUrl(url, options);
};

module.exports = runWax;
module.exports.runWax = runWax;
module.exports.runWaxUrl = runWaxUrl;

