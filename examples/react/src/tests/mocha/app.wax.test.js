const { expect } = require('chai');
const React = require('react');
const { render } = require('@testing-library/react');
const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig');
const App = require('../../App').default;

describe('App Accessibility Tests with Mocha + Wax', () => {
  it('should have no accessibility violations for main app', async () => {
    const { container } = render(React.createElement(App));
    const violations = await runWax(container.innerHTML, waxConfig);
    console.log('violations mocha', violations);
    expect(violations).to.have.length(0);
  });

  it('should have no accessibility violations for buttons', async () => {
    const { container } = render(React.createElement(App));
    const buttonContainer = container.querySelector('.container');
    const violations = await runWax(buttonContainer.innerHTML, waxConfig);
    expect(violations).to.have.length(0);
  });

  it('should have no accessibility violations for headings', async () => {
    const { container } = render(React.createElement(App));
    const headings = container.querySelectorAll('h1, h2, h3');
    const parent = headings[0]?.parentElement;
    const violations = await runWax(parent.innerHTML, waxConfig);
    expect(violations).to.have.length(0);
  });

  it('should have no accessibility violations for links', async () => {
    const { container } = render(React.createElement(App));
    const links = container.querySelectorAll('a');
    const parent = links[0]?.parentElement;
    const violations = await runWax(parent.innerHTML, waxConfig);
    expect(violations).to.have.length(0);
  });

  it('write violations to file', async () => {
    const { container } = render(React.createElement(App));
    const violations = await runWax(container.innerHTML, waxConfig);
    
    // Write violations to file
    const fs = require('fs');
    const path = require('path');
    const violationsPath = path.join(__dirname, 'wax_violations.json');
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2));
    
    expect(violations).to.not.be.undefined;
  });
}); 