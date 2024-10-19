import { expect, test, describe, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { RouterProvider } from 'react-router-dom'

import { memoryRouter } from './routes'

describe('App', () => {
	test('renders HelloWorld component', async () => {
		const { getByText } = render(<RouterProvider router={memoryRouter} />)
		await expect.element(getByText('Hello World')).toBeInTheDocument()
	})
	test('renders without console warnings or errors', async () => {
		const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => { })
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { })

		render(<RouterProvider router={memoryRouter} />)

		expect(consoleWarn).not.toHaveBeenCalled()
		expect(consoleError).not.toHaveBeenCalled()

		consoleWarn.mockRestore()
		consoleError.mockRestore()
	})
})
