module.exports = {
  'React App Nightwatch Tests': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000);

    browser
      .assert.containsText('h1', 'React Testing Demo')
      .assert.containsText('h2', 'Welcome to our simple React app!');

    browser
      .assert.visible('button')
      .assert.containsText('button', 'Click me!')
      .assert.containsText('button:nth-child(2)', 'Show Alert');

    browser
      .assert.containsText('button', 'Clicked 0 times')
      .click('button')
      .assert.containsText('button', 'Clicked 1 times');

    browser
      .assert.attributeEquals('a[href="https://reactjs.org"]', 'href', 'https://reactjs.org/')
      .assert.attributeEquals('a[href="https://testing-library.com"]', 'href', 'https://testing-library.com/')
      .assert.attributeEquals('a[href="https://jestjs.io"]', 'href', 'https://jestjs.io/');

    browser.end();
  }
}; 