import { render, screen } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import Product from '../../components/Product'
import React from 'react'
import blue from '../../assets/blue.png'
import '@testing-library/jest-dom/vitest'

vi.mock('react-router-dom', () => ({
	useOutletContext: () => ({
	  addAmount: vi.fn(),
	  subAmount: vi.fn(),
	  changeAmount: vi.fn(),
	  addProductToCart: vi.fn(),
	}),
}))

const product = {
		id: 1,
		name: "x-12E",
		price: 15,
		weight: 1.5,
		weightUnity: "mg",
		money: "$",
		img: blue,
		description: "A burst of electric euphoria, this pill sends waves of neon energy through your veins, making the world pulse in sync with your heartbeat.",
		amount: 1,	
}

describe('Product', () => {
	it('should render Product with all the infos when provided', () => {
		render(<Product product={product}/>)
		
		expect(screen.getByText(product.name)).toBeInTheDocument()
		expect(screen.getByText(product.description)).toBeInTheDocument()
		expect(screen.getByText(`${product.weight} ${product.weightUnity}`)).toBeInTheDocument()
		expect(screen.getByText(`${product.money}${product.price}`)).toBeInTheDocument()
	})
})