module.exports = {
  require: ['@babel/register', 'jsdom-global/register'],
  extension: ['js', 'jsx'],
  spec: 'src/tests/mocha/**/*.test.js',
  timeout: 5000
} 