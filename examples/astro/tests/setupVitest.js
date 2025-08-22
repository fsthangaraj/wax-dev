import '@testing-library/jest-dom';

// Mock fetch for Node.js environment
global.fetch = require('node-fetch');

// Mock window.location for Astro routing
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:4321/',
    origin: 'http://localhost:4321',
    pathname: '/',
    search: '',
    hash: ''
  },
  writable: true
});

// Mock localStorage
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {}
};

// Mock sessionStorage
global.sessionStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {}
}; 