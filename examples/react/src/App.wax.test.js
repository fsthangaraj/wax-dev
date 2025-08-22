import { render } from '@testing-library/react';
import App from './App';
import waxConfig from './waxConfig';
const runWax = require('@wally-ax/wax-dev');

describe('App AX Test', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<App />);
    const ele = JSON.stringify(container.innerHTML);
    const violations = await runWax(ele, waxConfig);
    expect(violations).toHaveLength(0);
  });
});

describe('Button Component AX Test', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <div>
        <button className="button">Click me! (Clicked 0 times)</button>
        <button className="button">Show Alert</button>
      </div>
    );
    const ele = JSON.stringify(container.innerHTML);
    const violations = await runWax(ele, waxConfig);
    expect(violations).toHaveLength(0);
  });
});

describe('Heading Component AX Test', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <div>
        <h1 className="heading">React Testing Demo</h1>
        <h2 className="heading">Welcome to our simple React app!</h2>
        <h3 className="heading">Interactive Elements</h3>
      </div>
    );
    const ele = JSON.stringify(container.innerHTML);
    const violations = await runWax(ele, waxConfig);
    expect(violations).toHaveLength(0);
  });
});

describe('Link Component AX Test', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <div>
        <a href="https://reactjs.org" className="link">React Documentation</a>
        <a href="https://testing-library.com" className="link">Testing Library</a>
        <a href="https://jestjs.io" className="link">Jest Testing Framework</a>
      </div>
    );
    const ele = JSON.stringify(container.innerHTML);
    const violations = await runWax(ele, waxConfig);
    expect(violations).toHaveLength(0);
  });
}); 