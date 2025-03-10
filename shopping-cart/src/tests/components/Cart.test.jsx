import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Cart from '../../components/Cart'
import blue from '../../assets/blue.png'
import blue1 from '../../assets/blue1.png'

afterEach(() => cleanup())

vi.mock('react-router-dom', () => ({
	useOutletContext: () => ({
	  addAmount: vi.fn(),
	  subAmount: vi.fn(),
	  changeAmount: vi.fn(),
	  addProductToCart: vi.fn(),
	}),
}))

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

const cartTotalPrice = cartContent.reduce((total, product) => total + product.amount * product.price, 0)

describe('Cart', () => {
	it('should render title', () => {
		render(<Cart cartContent={cartContent}/>)
		
		const heading = screen.getByRole('heading')
		
		expect(heading).toBeInTheDocument()
		expect(heading).toHaveTextContent(/shopping cart/i)
	})
	
	it('should render cartItems', () => {
		render(<Cart cartContent={cartContent}/>)
		
		const productsContainer = screen.getByTestId("products-container")
		
		expect(productsContainer.hasChildNodes()).toBe(true)
	})
	
	it('should render total price', () => {
		render(<Cart cartContent={cartContent}/>)
		
		const title = screen.getByText(/total price/i)
		const price = screen.getByText(`$ ${cartTotalPrice}`)
		
		expect(title).toBeInTheDocument()
		expect(price).toBeInTheDocument()
	})
})