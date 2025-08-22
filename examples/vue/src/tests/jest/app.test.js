import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from '@jest/globals';
import App from '../../App.vue';

describe('App Jest Tests', () => {
  it('should display the main heading', () => {
    render(App);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Welcome to our simple Vue app!');
  });

  it('should display welcome heading', () => {
    render(App);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Vue Testing Demo');
  });

  it('should have interactive buttons', () => {
    render(App);
    const clickButton = screen.getByText(/Click me!/);
    const alertButton = screen.getByText('Show Alert');
    
    expect(clickButton).toBeInTheDocument();
    expect(alertButton).toBeInTheDocument();
  });

  it('should have external links', () => {
    render(App);
    const vueLink = screen.getByText('Vue Documentation');
    const testingLink = screen.getByText('Testing Library');
    const vitestLink = screen.getByText('Vitest Testing Framework');
    
    expect(vueLink).toHaveAttribute('href', 'https://vuejs.org');
    expect(testingLink).toHaveAttribute('href', 'https://testing-library.com');
    expect(vitestLink).toHaveAttribute('href', 'https://vitest.dev');
  });
}); 