import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import App from '../../App.vue'

describe('App Vitest Tests', () => {
  it('should display the main heading', () => {
    render(App)
    expect(screen.getByText('Vue Testing Demo')).toBeInTheDocument()
  })

  it('should display welcome heading', () => {
    render(App)
    expect(screen.getByText('Welcome to our simple Vue app!')).toBeInTheDocument()
  })

  it('should have interactive buttons', () => {
    render(App)
    expect(screen.getByText(/Click me!/)).toBeInTheDocument()
    expect(screen.getByText('Show Alert')).toBeInTheDocument()
  })

  it('should increment counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(App)
    
    const button = screen.getByText(/Click me!/)
    expect(button).toHaveTextContent('Clicked 0 times')
    
    await user.click(button)
    expect(button).toHaveTextContent('Clicked 1 times')
  })

  it('should have external links', () => {
    render(App)
    expect(screen.getByText('Vue Documentation')).toHaveAttribute('href', 'https://vuejs.org')
    expect(screen.getByText('Testing Library')).toHaveAttribute('href', 'https://testing-library.com')
    expect(screen.getByText('Vitest Testing Framework')).toHaveAttribute('href', 'https://vitest.dev')
  })
}) 