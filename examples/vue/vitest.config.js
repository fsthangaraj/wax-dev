import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupVitest.js'],
    globals: true,
    include: ['src/tests/vitest/**/*.{test,spec}.{js,jsx,vue}'],
    exclude: [
      'src/tests/webdriverio/**/*',
      'src/tests/playwright/**/*',
      'src/tests/testcafe/**/*',
      'src/tests/nightwatch/**/*',
      'src/tests/mocha/**/*'
    ]
  }
}) 