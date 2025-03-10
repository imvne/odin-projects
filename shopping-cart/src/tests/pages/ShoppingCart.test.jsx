import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import ShoppingCart from '../../pages/ShoppingCart'
import { BrowserRouter, useOutletContext } from 'react-router-dom'
import blue from '../../assets/blue.png'
import blue1 from '../../assets/blue1.png'

afterEach(() => cleanup())

const cartContent = [
	{
		id: 1,
		name: "x-12E",
		price: 15,
		weight: 1.5,
		weightUnity: "mg",
		money: "$",
		img: blue,
		description: "A burst of electric euphoria, this pill sends waves of neon energy through your veins, making the world pulse in sync with your heartbeat.",
		amount: 1,
		
	},
	{
		id: 2,
		name: "x-PL3",
		price: 25,
		weight: 1.5,
		weightUnity: "mg",
		money: "$",
		img: blue1,
		description: "A dreamy drift into cosmic bliss, melting away stress and gravity, leaving you floating weightless in a universe of pure color.",
		amount: 1,
	},
]

vi.mock('react-router-dom', () => ({
	...require('react-router-dom'),
	useOutletContext: vi.fn()
}))
    

describe('ShoppingCart', () => {
	it('should render Cart if cart is not empty', () => {
		vi.mocked(useOutletContext).mockReturnValue({ cartContent: cartContent });
		
		render(<ShoppingCart />, { wrapper: BrowserRouter})
		
		const cart = screen.getByTestId("cart-component")
		
		expect(cart).toBeInTheDocument()
	})
	
	it('should render emptyCart if cart is empty', () => {
		vi.mocked(useOutletContext).mockReturnValue({ cartContent: [] });
		
		render(<ShoppingCart />, { wrapper: BrowserRouter})
		
		const emptyCart = screen.getByTestId("empty-cart-component")
		
		expect(emptyCart).toBeInTheDocument()
	})
	
	it('should render footer', () => {
		vi.mocked(useOutletContext).mockReturnValue({ cartContent: [] });
		
		render(<ShoppingCart />, { wrapper: BrowserRouter})
		
		const footer = screen.getByTestId("footer")
		
		expect(footer).toBeInTheDocument()
	})
})