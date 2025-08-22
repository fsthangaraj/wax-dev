module.exports = {
  require: [
    'jsdom-global/register',
    './tests/setupMocha.cjs'
  ],
  spec: 'tests/mocha/**/*.test.cjs',
  timeout: 10000,
  recursive: true
}; 