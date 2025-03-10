import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Footer from '../../components/Footer'

describe('Footer', () => {
	it('should render brand name and other text', () => {
		render(<Footer />)
		
		const brandName = screen.getByText(/@ 2025 CandyBay Inc. All rights reserved./i)
		const text = screen.getByText(/Terms of service/i)
		
		expect(brandName).toBeInTheDocument()
		expect(text).toBeInTheDocument()
	})
})