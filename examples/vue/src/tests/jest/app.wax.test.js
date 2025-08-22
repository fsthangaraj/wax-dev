import { render } from '@testing-library/vue';
import { describe, it, expect } from '@jest/globals';
import { runWax } from '@wally-ax/wax-dev';
import waxConfig from '../../waxConfig.js';
import App from '../../App.vue';

describe('App Accessibility Tests with Jest + Wax', () => {
  it('should have no accessibility violations for main app', async () => {
    const { container } = render(App);
    const violations = await runWax(container.innerHTML, waxConfig);
    console.log('violations jest vue', violations);
    expect(violations).toHaveLength(0);
  });

  it('should have no accessibility violations for buttons', async () => {
    const { container } = render(App);
    const buttonContainer = container.querySelector('.container');
    const violations = await runWax(buttonContainer.innerHTML, waxConfig);
    console.log('violations jest vue buttons', violations);
    expect(violations).toHaveLength(0);
  });

  it('should have no accessibility violations for headings', async () => {
    const { container } = render(App);
    const headings = container.querySelectorAll('h1, h2, h3');
    const headingsHTML = Array.from(headings).map(h => h.outerHTML).join('');
    const violations = await runWax(headingsHTML, waxConfig);
    console.log('violations jest vue headings', violations);
    expect(violations).toHaveLength(0);
  });

  it('should have no accessibility violations for links', async () => {
    const { container } = render(App);
    const links = container.querySelectorAll('a');
    const linksHTML = Array.from(links).map(link => link.outerHTML).join('');
    const violations = await runWax(linksHTML, waxConfig);
    console.log('violations jest vue links', violations);
    expect(violations).toHaveLength(0);
  });

  it('write violations to file', async () => {
    const { container } = render(App);
    const violations = await runWax(container.innerHTML, waxConfig);
    
    // Write violations to file for analysis
    const fs = require('fs');
    const path = require('path');
    const outputPath = path.join(__dirname, '../../../tests_output/jest_violations.json');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(violations, null, 2));
    console.log(`Violations written to: ${outputPath}`);
    
    expect(violations).toBeDefined();
  });
}); 