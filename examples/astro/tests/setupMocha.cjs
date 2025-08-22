// Setup for Mocha tests
require('jsdom-global')();

// Mock fetch for Node.js environment
global.fetch = require('node-fetch');

// Mock window.location for Astro routing (only if not already defined)
if (!global.window.location) {
  global.window.location = {
    href: 'http://localhost:4321/',
    origin: 'http://localhost:4321',
    pathname: '/',
    search: '',
    hash: ''
  };
}

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