import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import NavigationBar from '../../components/NavigationBar'

afterEach(() => cleanup())

describe('NavigationBar', () => {
	
	it('should render brand name', () => {
		render(<NavigationBar cartTotalAmount={3}/>, { wrapper: BrowserRouter })
		
		const heading = screen.getByRole('heading')
		
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(/candy\s*bay/i)
	})
	
	it('should render logo', () => {
		const { container } = render(<NavigationBar cartTotalAmount={3}/>, { wrapper: BrowserRouter })
		
		const logo = container.querySelector('.lucide-pill')
		
		expect(logo).toBeInTheDocument()
	})
	
	it('should navigate to Home page', async () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByTestId("logo-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/")
	})
	
	it('should navigate to Products page', async () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByTestId("products-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/products")
	})
	
	it('should navigate to Contact page', async () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByTestId("contact-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/contact")
	})
	
	it('should navigate to ShoppingCart page', async () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByTestId("shopping-cart-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/shopping-cart")
	})
	
	it('should navigate to User page', async () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByTestId("user-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/")
	})
	
	it('should render cart total number of items when cartContent provided', () => {
		render(<NavigationBar cartTotalAmount={5} />, { wrapper: BrowserRouter })
		
		const text = screen.getByText(/5/)
		
		expect(text).toBeInTheDocument()
	})
})