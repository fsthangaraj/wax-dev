import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from '../../App'

configure({ adapter: new Adapter() })

describe('App Enzyme Tests', () => {
  it('should display the main heading', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('React Testing Demo')
  })

  it('should display welcome heading', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h2').text()).toBe('Welcome to our simple React app!')
  })

  it('should have interactive buttons', () => {
    const wrapper = shallow(<App />)
    const buttons = wrapper.find('button')
    expect(buttons).toHaveLength(2)
    expect(buttons.at(0).text()).toContain('Click me!')
    expect(buttons.at(1).text()).toBe('Show Alert')
  })

  it('should increment counter when button is clicked', () => {
    const wrapper = mount(<App />)
    const button = wrapper.find('button').at(0)
    
    expect(button.text()).toContain('Clicked 0 times')
    button.simulate('click')
    expect(button.text()).toContain('Clicked 1 times')
  })

  it('should have external links', () => {
    const wrapper = shallow(<App />)
    const links = wrapper.find('a')
    expect(links).toHaveLength(3)
    expect(links.at(0).prop('href')).toBe('https://reactjs.org')
    expect(links.at(1).prop('href')).toBe('https://testing-library.com')
    expect(links.at(2).prop('href')).toBe('https://jestjs.io')
  })
}) 