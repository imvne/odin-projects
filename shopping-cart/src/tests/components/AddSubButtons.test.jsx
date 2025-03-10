import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import AddSubButtons from '../../components/AddSubButtons'
import blue from '../../assets/blue.png'

afterEach(() => cleanup())

vi.mock('react-router-dom', () => ({
	useOutletContext: () => ({
	  addAmount: vi.fn(),
	  subAmount: vi.fn(),
	  changeAmount: vi.fn(),
	  addProductToCart: vi.fn(),
	}),
}))

const props = { 
	theme: "boldStyle", 
	productData: {
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
	listName: "products", 
}

describe('AddSubButtons', () => {
	it('should render amount buttons', () => {
		render(<AddSubButtons {...props}/>)
		
		const amountButtons = screen.getAllByTestId("amount-button")
		
		expect(amountButtons.length).toBe(2)
		amountButtons.forEach(button => { expect(button).toBeInTheDocument() })
	})
	
	it('should render right amount', () => {
		render(<AddSubButtons {...props}/>)
		
		const amount = screen.getByTestId("amount")
		
		expect(amount).toHaveValue(`${props.productData.amount}`)
	})
})