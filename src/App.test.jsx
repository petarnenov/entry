import { expect, test, describe, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App'

describe('App', () => {
	test('renders HelloWorld component', async () => {
		const { getByText } = render(<App />)

		await expect.element(getByText('Hello World x1!')).toBeInTheDocument()
	})
	test('renders without console warnings or errors', async () => {
		const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => { })
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { })

		render(<App />)

		expect(consoleWarn).not.toHaveBeenCalled()
		expect(consoleError).not.toHaveBeenCalled()

		consoleWarn.mockRestore()
		consoleError.mockRestore()
	})
})
