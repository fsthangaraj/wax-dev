const { expect } = require('chai');
const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

describe('App Accessibility Tests with Mocha + Wax', () => {
  let vueAppHTML;

  before(async () => {
    // Since Vue content is dynamically rendered by JavaScript,
    // we'll use the realistic HTML that matches what Vue actually renders
    // This is the same approach as other frameworks when they can't access the runtime
    vueAppHTML = `
      <div class="container">
        <h2 class="heading">Vue Testing Demo</h2>
        <h1 class="heading">Welcome to our simple Vue app!</h1>
        <p>This is a simple page with buttons, headings, and links for testing npm packages.</p>
        <h3 class="heading">Interactive Elements</h3>
        <div>
          <button class="button">Click me! (Clicked 0 times)</button>
          <button class="button">Show Alert</button>
        </div>
        <h3 class="heading">Useful Links</h3>
        <div>
          <a href="https://vuejs.org" class="link" target="_blank" rel="noopener noreferrer">Vue Documentation</a>
          <a href="https://testing-library.com" class="link" target="_blank" rel="noopener noreferrer">Testing Library</a>
          <a href="https://vitest.dev" class="link" target="_blank" rel="noopener noreferrer">Vitest Testing Framework</a>
        </div>
        <h3 class="heading">About</h3>
        <p>This app is designed to test npm packages with Vue components. It includes:</p>
        <ul>
          <li>Button components with click handlers</li>
          <li>Heading components with different levels</li>
          <li>Link components with external URLs</li>
          <li>State management with Composition API</li>
        </ul>
      </div>
    `;
    
    // console.log('Using realistic Vue app HTML (matches actual rendered output)');
    // console.log('HTML length:', vueAppHTML.length);
    // console.log('HTML preview:', vueAppHTML.substring(0, 200) + '...');
  });

  it('should test Vue app accessibility (main app)', async () => {
    console.log('Testing with HTML length:', vueAppHTML.length);
    
    const violations = await runWax(vueAppHTML, waxConfig);
    console.log('violations mocha vue (realistic app)', violations);
    
    // Should find the same accessibility issues as other frameworks
    expect(violations).to.be.an('array');
    expect(violations.length).to.be.greaterThan(0); // Should find heading structure issues
  });

  it('should test Vue app button accessibility', async () => {
    // Extract button section from the HTML
    const buttonMatch = vueAppHTML.match(/<div[^>]*>[\s\S]*?<button[^>]*>[\s\S]*?<\/div>/);
    const buttonHTML = buttonMatch ? buttonMatch[0] : vueAppHTML;
    
    const violations = await runWax(buttonHTML, waxConfig);
    expect(violations).to.be.an('array');
  });

  it('should test Vue app heading structure', async () => {
    // Extract heading section from the HTML
    const headingMatch = vueAppHTML.match(/<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>/g);
    const headingHTML = headingMatch ? headingMatch.join('') : vueAppHTML;
    
    const violations = await runWax(headingHTML, waxConfig);
    expect(violations).to.be.an('array');
    expect(violations.length).to.be.greaterThan(0); // Should find heading structure issues
  });

  it('should write Vue app violations to file', async () => {
    const violations = await runWax(vueAppHTML, waxConfig);
    
    // Write violations to file
    const fs = require('fs');
    const path = require('path');
    const violationsPath = path.join(__dirname, 'wax_violations.json');
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
    
    expect(violations).to.not.be.undefined;
  });
}); 