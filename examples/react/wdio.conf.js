exports.config = {
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    specs: [
        './src/tests/webdriverio/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
} 