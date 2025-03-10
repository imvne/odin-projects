import '@testing-library/jest-dom/vitest'
import { it, expect, describe, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../../pages/Contact'

describe('Contact', () => {
	it('should render footer', () => {
		render(<Contact />)
		
		const footer = screen.getByTestId("footer")
		
		expect(footer).toBeInTheDocument()
	})
})