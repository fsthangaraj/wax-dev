import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import { runWax } from '@wally-ax/wax-dev'
import waxConfig from '../../waxConfig.js'
import App from '../../App.vue'

describe('App Accessibility Tests with Vitest + Wax', () => {
  it('should have no accessibility violations for main app', async () => {
    const { container } = render(App)
    console.log('container vitest vue', container.innerHTML)
    const violations = await runWax(container.innerHTML, waxConfig)
    console.log('violations vitest vue', violations)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for buttons', async () => {
    const { container } = render(App)
    const buttonContainer = container.querySelector('.container')
    const violations = await runWax(buttonContainer.innerHTML, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for headings', async () => {
    const { container } = render(App)
    const headings = container.querySelectorAll('h1, h2, h3')
    const parent = headings[0]?.parentElement
    const violations = await runWax(parent.innerHTML, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for links', async () => {
    const { container } = render(App)
    const links = container.querySelectorAll('a')
    const parent = links[0]?.parentElement
    const violations = await runWax(parent.innerHTML, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('write violations to file', async () => {
    const { container } = render(App)
    const violations = await runWax(container.innerHTML, waxConfig)
    
    // Write violations to file
    const fs = require('fs')
    const path = require('path')
    const violationsPath = path.join(__dirname, 'wax_violations.json')
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2))
    
    expect(violations).toBeDefined()
  })
}) 