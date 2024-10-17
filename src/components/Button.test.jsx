import { describe, expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import Button from './Button'

describe('Button', () => {
	test('renders a button with the provided children text', async () => {
		const buttonText = 'Click me'
		const { getByRole } = render(<Button onClick={() => { }}>
			{buttonText}
		</Button>)

		await expect.element(getByRole('button', { name: buttonText })).toBeInTheDocument();
	})
	test('calls onClick function when button is clicked', async () => {
		const onClickMock = vi.fn()
		const { getByRole } = render(<Button onClick={onClickMock}>Click me</Button>)

		const button = getByRole('button', { name: 'Click me' })
		await button.click()

		expect(onClickMock).toHaveBeenCalledTimes(1)
	})
	test('should disable the button when the disabled prop is true', async () => {
		const { getByRole } = render(<Button onClick={() => { }} disabled>Disabled Button</Button>)

		await expect.element(getByRole('button')).toHaveProperty('disabled', true)
	})
})
