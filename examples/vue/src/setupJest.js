import '@testing-library/jest-dom';

// Polyfill for fetch in Jest environment
global.fetch = require('node-fetch'); 