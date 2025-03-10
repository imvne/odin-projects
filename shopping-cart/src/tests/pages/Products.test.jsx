import '@testing-library/jest-dom/vitest'
import { it, expect, describe, vi, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Products from '../../pages/Products'
import blue from '../../assets/blue.png'
import blue1 from '../../assets/blue1.png'

afterEach(() => cleanup())

vi.mock('react-router-dom', () => ({
	useOutletContext: () => ({
	  	products: [
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
	}),
}))

describe('Products', () => {
	it('should render a product card for each product', () => {
		render(<Products />)
		
		const productCards = screen.getAllByTestId("product-card")
		
		productCards.forEach(card => { expect(card).toBeInTheDocument() })
	})
	
	it('should render footer', () => {
		render(<Products />)
		
		const footer = screen.getByTestId("footer")
		
		expect(footer).toBeInTheDocument()
	})
})