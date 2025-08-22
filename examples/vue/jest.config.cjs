module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  testMatch: [
    '<rootDir>/src/tests/jest/**/*.test.js',
    '<rootDir>/src/tests/jest/**/*.test.jsx'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,vue}',
    '!src/main.js',
    '!src/tests/**'
  ]
}; 