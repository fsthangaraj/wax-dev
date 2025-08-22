const { config } = require('@wdio/globals');

exports.config = {
  runner: 'local',
  autoCompileOpts: {
    tsNodeOpts: {
      project: './tsconfig.json'
    }
  },
  specs: [
    './tests/webdriverio/**/*.spec.js'
  ],
  exclude: [],
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome'
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:4321',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}; 