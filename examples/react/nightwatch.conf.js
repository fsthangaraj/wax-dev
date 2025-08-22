module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['src/tests/nightwatch'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/writing-tests/filtering-tests.html
  test_filter: '',

  // See https://nightwatchjs.org/guide/running-tests/parallel-running.html
  parallel_process_delay: 10,

  // See https://nightwatchjs.org/guide/configuration/define-test-environments.html
  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  // See https://nightwatchjs.org/guide/extending-nightwatch/custom-reporter.html
  reporter: 'html',

  // See https://nightwatchjs.org/guide/configuration/define-test-environments.html
  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000',
      silent: true,
      screenshots: {
        enabled: false,
        path: 'screenshots',
        on_failure: true
      },
      webdriver: {
        start_process: true,
        server_path: '',
        log_path: 'logs',
        port: 4444
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage']
        }
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', '--disable-dev-shm-usage']
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        log_path: 'logs',
        port: 4444
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      },
      webdriver: {
        start_process: true,
        server_path: '',
        log_path: 'logs',
        port: 4444
      }
    }
  }
}; 