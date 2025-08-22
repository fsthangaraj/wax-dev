import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setupVitest.js'],
    include: ['tests/vitest/**/*.test.js'],
    exclude: ['tests/**/*.spec.js', 'tests/**/*.cy.js'],
    globals: true
  },
}); 