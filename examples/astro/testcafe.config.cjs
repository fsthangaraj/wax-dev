module.exports = {
  src: ['tests/testcafe/**/*.test.js'],
  browsers: ['chrome'],
  hostname: 'localhost',
  port: 1337,
  baseUrl: 'http://localhost:4321',
  developmentMode: false,
  stopOnFirstFail: false,
  disableMultipleWindows: true,
  pageLoadTimeout: 3000,
  assertionTimeout: 3000,
  selectorTimeout: 3000
}; 