module.exports = {
  require: ['@babel/register', 'jsdom-global/register'],
  extension: ['js', 'jsx'],
  spec: 'src/tests/mocha/**/*.test.cjs',
  timeout: 5000
} 