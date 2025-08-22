import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { runWax } from '@wally-ax/wax-dev'
import waxConfig from '../../waxConfig'
import App from '../../App'

configure({ adapter: new Adapter() })

describe('App Accessibility Tests with Enzyme + Wax', () => {
  it('should have no accessibility violations for main app', async () => {
    const wrapper = mount(<App />)
    const html = wrapper.html()
    const violations = await runWax(html, waxConfig)
    console.log('violations enzyme', violations)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for buttons', async () => {
    const wrapper = mount(<App />)
    const buttonContainer = wrapper.find('.container').html()
    const violations = await runWax(buttonContainer, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for headings', async () => {
    const wrapper = mount(<App />)
    const headings = wrapper.find('h1, h2, h3')
    const parent = headings.at(0).parent().html()
    const violations = await runWax(parent, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('should have no accessibility violations for links', async () => {
    const wrapper = mount(<App />)
    const links = wrapper.find('a')
    const parent = links.at(0).parent().html()
    const violations = await runWax(parent, waxConfig)
    expect(violations).toHaveLength(0)
  })

  it('write violations to file', async () => {
    const wrapper = mount(<App />)
    const html = wrapper.html()
    const violations = await runWax(html, waxConfig)
    
    // Write violations to file
    const fs = require('fs')
    const path = require('path')
    const violationsPath = path.join(__dirname, 'wax_violations.json')
    fs.writeFileSync(violationsPath, JSON.stringify(violations, null, 2))
    
    expect(violations).toBeDefined()
  })
}) 