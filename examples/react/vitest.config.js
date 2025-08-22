import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupVitest.js'],
    globals: true,
    include: ['src/tests/vitest/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: [
      'src/tests/webdriverio/**/*',
      'src/tests/playwright/**/*',
      'src/tests/testcafe/**/*',
      'src/tests/nightwatch/**/*',
      'src/App.test.js',
      'src/App.wax.test.js'
    ]
  }
}) 