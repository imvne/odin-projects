import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, queryByTestId, render, screen } from '@testing-library/react'
import CartItem from '../../components/CartItem'
import userEvent from '@testing-library/user-event'
import blue from '../../assets/blue.png'
import blue1 from '../../assets/blue1.png'
import Cart from '../../components/Cart'

afterEach(() => cleanup())

vi.mock('react-router-dom', () => ({
	useOutletContext: () => ({
	  addAmount: vi.fn(),
	  subAmount: vi.fn(),
	  changeAmount: vi.fn(),
	  deleteProductFromCart: vi.fn(),
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
		amount: 2,
		
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
		amount: 5,
	},
]

describe('CartItem', () => {
	it('should render delete button', () => {
		render(<CartItem product={cartContent[0]}/>)
		
		const button = screen.getByTestId("delete-button")
		
		expect(button).toBeInTheDocument()
	})
	
	it('should render an icon in delete button', () => {
		render(<CartItem product={cartContent[0]}/>)
		
		const button = screen.getByTestId("delete-button")
		
		expect(button.hasChildNodes()).toBe(true)
	})
	
	// it('should delete CartItem when delete button clicked', async () => {
	// 	render(<Cart cartContent={cartContent}/>)
		
	// 	const button = screen.getAllByTestId('delete-button')[0]
	// 	const user = userEvent.setup()
	// 	await user.click(button)
		
	// 	const item = screen.queryByTestId(`${cartContent[0].id}`)
		
	// 	expect(item).not.toBeInTheDocument()
	// })
	
	it('should render CartItem with all the infos when provided', () => {
		render(<CartItem product={cartContent[0]}/>)
		
		expect(screen.getByText(/x-12E/i)).toBeInTheDocument()
		expect(screen.getByText(/\$ 15/)).toBeInTheDocument()
		expect(screen.getByText(/A burst of electric euphoria/i)).toBeInTheDocument()
		expect(screen.getByText(/\$\s?30/)).toBeInTheDocument()
	})
})