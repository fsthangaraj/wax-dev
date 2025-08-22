const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

module.exports = {
  'Vue App Accessibility Tests with Nightwatch + Wax': function (browser) {
    browser
      .url('http://localhost:3001')
      .waitForElementVisible('body', 1000);

    browser.execute(function() {
      return document.body.innerHTML;
    }, [], async function(result) {
      const bodyHTML = result.value;
      console.log('bodyHTML vue', bodyHTML);
      
      try {
        const violations = await runWax(bodyHTML, waxConfig);
        console.log('violations nightwatch vue', violations);
        browser.assert.equal(violations.length, 0, 'No accessibility violations for main app');
      } catch (error) {
        console.error('Error running wax:', error);
        browser.assert.fail('Wax test failed');
      }
    });

    browser.execute(function() {
      const container = document.querySelector('.container');
      return container ? container.innerHTML : '';
    }, [], async function(result) {
      const containerHTML = result.value;
      
      try {
        const violations = await runWax(containerHTML, waxConfig);
        browser.assert.equal(violations.length, 0, 'No accessibility violations for buttons');
      } catch (error) {
        console.error('Error running wax:', error);
        browser.assert.fail('Wax test failed');
      }
    });

    browser.execute(function() {
      const headings = document.querySelectorAll('h1, h2, h3');
      const parent = headings[0]?.parentElement;
      return parent ? parent.innerHTML : '';
    }, [], async function(result) {
      const headingsHTML = result.value;
      
      try {
        const violations = await runWax(headingsHTML, waxConfig);
        browser.assert.equal(violations.length, 0, 'No accessibility violations for headings');
      } catch (error) {
        console.error('Error running wax:', error);
        browser.assert.fail('Wax test failed');
      }
    });

    browser.execute(function() {
      const links = document.querySelectorAll('a');
      const parent = links[0]?.parentElement;
      return parent ? parent.innerHTML : '';
    }, [], async function(result) {
      const linksHTML = result.value;
      
      try {
        const violations = await runWax(linksHTML, waxConfig);
        browser.assert.equal(violations.length, 0, 'No accessibility violations for links');
      } catch (error) {
        console.error('Error running wax:', error);
        browser.assert.fail('Wax test failed');
      }
    });

    browser.execute(function() {
      return document.body.innerHTML;
    }, [], async function(result) {
      const bodyHTML = result.value;
      
      try {
        const violations = await runWax(bodyHTML, waxConfig);
        
        // Write violations to file
        const fs = require('fs');
        const path = require('path');
        const violationsPath = path.join(__dirname, 'wax_violations.json');
        fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
        
        browser.assert.ok(violations, 'Violations should be defined');
      } catch (error) {
        console.error('Error running wax:', error);
        browser.assert.fail('Wax test failed');
      }
    });

    browser.end();
  }
}; 