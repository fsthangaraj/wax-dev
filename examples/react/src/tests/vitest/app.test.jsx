import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

describe('App Vitest Tests', () => {
  it('should display the main heading', () => {
    render(<App />)
    expect(screen.getByText('React Testing Demo')).toBeInTheDocument()
  })

  it('should display welcome heading', () => {
    render(<App />)
    expect(screen.getByText('Welcome to our simple React app!')).toBeInTheDocument()
  })

  it('should have interactive buttons', () => {
    render(<App />)
    expect(screen.getByText(/Click me!/)).toBeInTheDocument()
    expect(screen.getByText('Show Alert')).toBeInTheDocument()
  })

  it('should increment counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByText(/Click me!/)
    expect(button).toHaveTextContent('Clicked 0 times')
    
    await user.click(button)
    expect(button).toHaveTextContent('Clicked 1 times')
  })

  it('should have external links', () => {
    render(<App />)
    expect(screen.getByText('React Documentation')).toHaveAttribute('href', 'https://reactjs.org')
    expect(screen.getByText('Testing Library')).toHaveAttribute('href', 'https://testing-library.com')
    expect(screen.getByText('Jest Testing Framework')).toHaveAttribute('href', 'https://jestjs.io')
  })
}) 