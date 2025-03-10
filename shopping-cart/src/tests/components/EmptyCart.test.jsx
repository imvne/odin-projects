import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach } from 'vitest'
import EmptyCart from '../../components/EmptyCart'
import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

afterEach(() => cleanup())

describe('EmptyCart', () => {
	it('should render empty cart text', () => {
		render(<EmptyCart/>, { wrapper: BrowserRouter})
		
		const heading = screen.getByRole('heading')
		
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(/empty cart/i)
	})
		
	it('should navigate to Products page', async () => {
		render(<EmptyCart/>, { wrapper: BrowserRouter})
		
		const text = screen.getByTestId("products-button")
		const user = userEvent.setup()
		await user.click(text)
		
		expect(window.location.pathname).toBe("/products")
	})
})