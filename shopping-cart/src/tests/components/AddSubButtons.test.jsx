import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import AddSubButtons from '../../components/AddSubButtons'
import blue from '../../assets/blue.png'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

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
		amount: 3,
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
	
	it('should sub 1 to amount when sub amount-button clicked, unless amount is 1', async () => {
		const mockProductData = { ...props.productData, amount: 4 };
		const mockSubAmount = vi.fn((id, listName) => {
			if (mockProductData.amount > 1) {
				mockProductData.amount -= 1;
			}
		});
		const newProps = { 
			...props, 
			productData: mockProductData, 
			subAmount: mockSubAmount 
		};
  
		render(<AddSubButtons {...newProps}/>)
		
		const amountButtons = screen.getAllByTestId("amount-button")
		
		const user = userEvent.setup()
	 	await user.click(amountButtons[0])
		
		await waitFor(() => { expect(newProps.productData.amount).toBe(3) })
	})
	
	it('should add 1 to amount when add amount-button clicked', async () => {
		const mockProductData = { ...props.productData, amount: 4 };
		const mockSubAmount = vi.fn((id, listName) => {
			mockProductData.amount += 1
		});
		const newProps = { 
			...props, 
			productData: mockProductData, 
			subAmount: mockSubAmount 
		};
  
		render(<AddSubButtons {...newProps}/>)
		
		const amountButtons = screen.getAllByTestId("amount-button")
		
		const user = userEvent.setup()
	 	await user.click(amountButtons[0])
		
		await waitFor(() => { expect(newProps.productData.amount).toBe(5) })
	})
	
	// it('should amount to amount when input value is changed', async () => {
	// 	render(<AddSubButtons {...props}/>)
		
	// 	const amount = screen.getByTestId("amount")
		
	// 	const user = userEvent.setup()
	// 	await user.type(amount, '5')
		
	// 	await waitFor(() => { expect(amount).toHaveValue('5') })
	// })
})