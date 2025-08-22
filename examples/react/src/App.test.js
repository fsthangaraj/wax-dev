import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders React Testing Demo heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/React Testing Demo/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders welcome heading', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to our simple React app!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders click me button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button click increments counter', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me!/i);
  
  // Initial state should show "Clicked 0 times"
  expect(screen.getByText(/Clicked 0 times/i)).toBeInTheDocument();
  
  // Click the button
  fireEvent.click(buttonElement);
  
  // Should now show "Clicked 1 times"
  expect(screen.getByText(/Clicked 1 times/i)).toBeInTheDocument();
});

test('renders React Documentation link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Documentation/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
}); 