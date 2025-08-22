const { expect } = require('chai');
const React = require('react');
const { render } = require('@testing-library/react');
const { screen } = require('@testing-library/react');
const userEvent = require('@testing-library/user-event');
const App = require('../../App').default;

describe('App Mocha Tests', () => {
  it('should display the main heading', () => {
    render(React.createElement(App));
    expect(screen.getByText('React Testing Demo')).to.exist;
  });

  it('should display welcome heading', () => {
    render(React.createElement(App));
    expect(screen.getByText('Welcome to our simple React app!')).to.exist;
  });

  it('should have interactive buttons', () => {
    render(React.createElement(App));
    expect(screen.getByText(/Click me!/)).to.exist;
    expect(screen.getByText('Show Alert')).to.exist;
  });

  it('should have clickable button', () => {
    render(React.createElement(App));
    
    const button = screen.getByText(/Click me!/);
    expect(button.textContent).to.include('Clicked 0 times');
    expect(button).to.exist;
  });

  it('should have external links', () => {
    render(React.createElement(App));
    expect(screen.getByText('React Documentation').getAttribute('href')).to.equal('https://reactjs.org');
    expect(screen.getByText('Testing Library').getAttribute('href')).to.equal('https://testing-library.com');
    expect(screen.getByText('Jest Testing Framework').getAttribute('href')).to.equal('https://jestjs.io');
  });
}); 