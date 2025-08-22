module.exports = {
  src_folders: ['src/tests/nightwatch'],
  launch_url: 'http://localhost:3001',
  webdriver: {
    start_process: true,
    server_path: '',
    port: 4444,
    cli_args: ['--verbose']
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
} 