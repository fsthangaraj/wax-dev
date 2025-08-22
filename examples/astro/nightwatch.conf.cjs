module.exports = {
  src_folders: ['tests/nightwatch'],
  page_objects_path: '',
  custom_commands_path: '',
  custom_assertions_path: '',
  
  test_settings: {
    default: {
      launch_url: 'http://localhost:4321',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: ['--verbose']
      }
    }
  }
}; 