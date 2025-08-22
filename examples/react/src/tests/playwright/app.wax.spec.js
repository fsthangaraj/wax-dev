const { test, expect } = require('@playwright/test');
const waxConfig = require('../../waxConfig').default;
import { runWax } from '@wally-ax/wax-dev'

test.describe('App Accessibility Tests with Wax', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have no accessibility violations for main app', async ({ page }) => {
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const violations = await runWax(bodyHTML, waxConfig);
    console.log('violations',violations);
    expect(violations).toHaveLength(0);
  });

  test('should have no accessibility violations for buttons', async ({ page }) => {
    const containerHTML = await page.evaluate(() => {
      const container = document.querySelector('.container');
      return container ? container.innerHTML : '';
    });
    const violations = await runWax(containerHTML, waxConfig);
    console.log('vilota',violations);
    expect(violations).toHaveLength(0);
  });

  test('should have no accessibility violations for headings', async ({ page }) => {
    const headingsHTML = await page.evaluate(() => {
      const headings = document.querySelectorAll('h1, h2, h3');
      const parent = headings[0]?.parentElement;
      return parent ? parent.innerHTML : '';
    });
    const violations = await runWax(headingsHTML, waxConfig);
    expect(violations).toHaveLength(0);
  });

  test('should have no accessibility violations for links', async ({ page }) => {
    const linksHTML = await page.evaluate(() => {
      const links = document.querySelectorAll('a');
      const parent = links[0]?.parentElement;
      return parent ? parent.innerHTML : '';
    });
    const violations = await runWax(linksHTML, waxConfig);
    expect(violations).toHaveLength(0);
  });

  test('write violations to file', async ({ page }) => {
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    const violations = await runWax(bodyHTML, waxConfig);
    
    // Write violations to file
    const fs = require('fs');
    const path = require('path');
    const violationsPath = path.join(__dirname, 'wax_violations.json');
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
    
    expect(violations).toBeDefined();
  });
}); 