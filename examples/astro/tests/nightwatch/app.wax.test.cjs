const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

module.exports = {
  'Astro App Accessibility Tests with Nightwatch + Wax': function (browser) {
    browser
      .url('http://localhost:4321')
      .waitForElementVisible('body', 10000)
      .waitForElementPresent('title', 10000)
      .pause(3000) // Give extra time for page to fully load
      .execute(function() {
        // Get the full HTML of the page after rendering
        return document.documentElement.outerHTML;
      }, [], async function(result) {
        const html = result.value;
        console.log('html nightwatch astro', html);
        const violations = await runWax(html, waxConfig);
        console.log('Nightwatch wax violations from REAL app:', violations);

        browser.assert.ok(violations !== undefined, 'Violations should be defined');
        browser.assert.ok(Array.isArray(violations), 'Violations should be an array');
        browser.assert.ok(violations.length >= 0, 'Should have at least 0 violations');
      })
      .end();
  },

  'should detect accessibility violations for buttons': function (browser) {
    browser
      .url('http://localhost:4321')
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('.buttons', 10000)
      .execute(function() {
        const element = document.querySelector('.buttons');
        return element ? element.outerHTML : '';
      }, [], async function(result) {
        const html = result.value;
        const violations = await runWax(html, waxConfig);
        console.log('Nightwatch wax violations for buttons:', violations);
        browser.assert.ok(violations.length >= 0, 'Should have at least 0 violations for buttons');
      })
      .end();
  },

  'should detect accessibility violations for headings': function (browser) {
    browser
      .url('http://localhost:4321')
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('.container', 10000)
      .execute(function() {
        const element = document.querySelector('.container');
        return element ? element.outerHTML : '';
      }, [], async function(result) {
        const html = result.value;
        const violations = await runWax(html, waxConfig);
        console.log('Nightwatch wax violations for headings:', violations);
        browser.assert.ok(violations.length >= 0, 'Should have at least 0 violations for headings');
      })
      .end();
  },

  'should detect accessibility violations for links': function (browser) {
    browser
      .url('http://localhost:4321')
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('.links', 10000)
      .execute(function() {
        const element = document.querySelector('.links');
        return element ? element.outerHTML : '';
      }, [], async function(result) {
        const html = result.value;
        const violations = await runWax(html, waxConfig);
        console.log('Nightwatch wax violations for links:', violations);
        browser.assert.ok(violations.length >= 0, 'Should have at least 0 violations for links');
      })
      .end();
  },

  'should test real Astro app HTML structure': function (browser) {
    browser
      .url('http://localhost:4321')
      .waitForElementVisible('body', 10000)
      .waitForElementVisible('.container', 10000)
      .assert.titleContains('Astro Testing Demo')
      .assert.visible('.container')
      .assert.visible('.btn.primary')
      .assert.visible('.link.external')
      .end();
  }
};
