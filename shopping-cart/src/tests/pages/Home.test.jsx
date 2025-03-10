import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'

describe('Home', () => {
	it('should render footer', () => {
		render(<Home />)
		
		const footer = screen.getByTestId("footer")
		
		expect(footer).toBeInTheDocument()
	})
})