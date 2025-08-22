module.exports = {
  'Vue App Nightwatch Tests': function (browser) {
    browser
      .url('http://localhost:3001')
      .waitForElementVisible('body', 1000);

    browser
      .assert.containsText('h1', 'Vue Testing Demo')
      .assert.containsText('h2', 'Welcome to our simple Vue app!');

    browser
      .assert.visible('button')
      .assert.containsText('button', 'Click me!')
      .assert.containsText('button:nth-child(2)', 'Show Alert');

    browser
      .assert.containsText('button', 'Clicked 0 times')
      .click('button')
      .assert.containsText('button', 'Clicked 1 times');

    browser
      .assert.attributeEquals('a[href="https://vuejs.org"]', 'href', 'https://vuejs.org')
      .assert.attributeEquals('a[href="https://testing-library.com"]', 'href', 'https://testing-library.com')
      .assert.attributeEquals('a[href="https://vitest.dev"]', 'href', 'https://vitest.dev');

    browser.end();
  }
}; 