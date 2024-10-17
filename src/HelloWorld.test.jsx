import { expect, test, describe, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import PropTypes from 'prop-types'
import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
  test('renders name', async () => {
    const { getByText, getByRole } = render(<HelloWorld name="Vitest" />)

    await expect.element(getByText('Hello Vitest x1!')).toBeInTheDocument()
    await getByRole('button', { name: 'Increment ' }).click()

    await expect.element(getByText('Hello Vitest x2!')).toBeInTheDocument()
  })

  test('renders default name', async () => {
    const { getByText, getByRole } = render(<HelloWorld />)

    await expect.element(getByText('Hello World x1!')).toBeInTheDocument()
    await getByRole('button', { name: 'Increment ' }).click()

    await expect.element(getByText('Hello World x2!')).toBeInTheDocument()
  })

  test('increments counter multiple times', async () => {
    const { getByText, getByRole } = render(<HelloWorld name="Test" />)

    await expect.element(getByText('Hello Test x1!')).toBeInTheDocument()

    const incrementButton = getByRole('button', { name: 'Increment ' })
    await incrementButton.click()
    await incrementButton.click()
    await incrementButton.click()

    await expect.element(getByText('Hello Test x4!')).toBeInTheDocument()
  })

  test('renders with empty string name', async () => {
    const { getByText } = render(<HelloWorld name="" />)

    await expect.element(getByText('Hello  x1!')).toBeInTheDocument()
  })

  test('validates prop types', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { })

    // Valid props
    PropTypes.checkPropTypes(HelloWorld.propTypes, { name: 'Test' }, 'prop', 'HelloWorld')
    expect(consoleError).not.toHaveBeenCalled()

    // Invalid prop type
    PropTypes.checkPropTypes(HelloWorld.propTypes, { name: 123 }, 'prop', 'HelloWorld')
    expect(consoleError).toHaveBeenCalledTimes(1)

    // Missing required prop (if 'name' is required)
    PropTypes.checkPropTypes(HelloWorld.propTypes, {}, 'prop', 'HelloWorld')
    // Uncomment the next line if 'name' is a required prop
    // expect(consoleError).toHaveBeenCalledTimes(2)

    consoleError.mockRestore()
  })

  test('validates prop-types import', () => {

    render(<HelloWorld />)

    // Check if HelloWorld component has propTypes defined
    expect(HelloWorld.propTypes).toBeDefined()
    expect(HelloWorld.propTypes.name).toBe(PropTypes.string)
  })
})

