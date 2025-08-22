module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupJest.cjs'],
  testMatch: ['<rootDir>/tests/jest/**/*.test.js', '<rootDir>/tests/jest/**/*.test.cjs'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@wally-ax)/)'
  ]
}; 