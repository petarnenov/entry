import { expect, test, describe } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useCounter from './useCounter'

describe('useCounter', () => {
	test('should initialize the counter with the provided initial value', () => {
		const initialValue = 5
		const { result } = renderHook(() => useCounter(initialValue))

		expect(result.current.count).toBe(initialValue)
	})
	test('should initialize the counter with 1 when no initial value is provided', () => {
		const { result } = renderHook(() => useCounter())

		expect(result.current.count).toBe(1)
	})
	test('should increment the counter by 1 when calling the increment function', () => {
		const { result } = renderHook(() => useCounter(5))

		expect(result.current.count).toBe(5)

		act(() => {
			result.current.increment()
		})

		expect(result.current.count).toBe(6)
	})
	test('should return the correct count value after multiple decrements', () => {
		const { result } = renderHook(() => useCounter(10))

		expect(result.current.count).toBe(10)

		act(() => {
			result.current.decrement()
			result.current.decrement()
			result.current.decrement()
		})

		expect(result.current.count).toBe(7)
	})
	test('should handle alternating increment and decrement calls correctly', () => {
		const { result } = renderHook(() => useCounter(5))

		expect(result.current.count).toBe(5)

		act(() => {
			result.current.increment()
			result.current.decrement()
			result.current.increment()
			result.current.decrement()
			result.current.increment()
		})

		expect(result.current.count).toBe(6)
	})
	test('should return an object with count, increment, and decrement properties', () => {
		const { result } = renderHook(() => useCounter())

		expect(result.current).toHaveProperty('count')
		expect(result.current).toHaveProperty('increment')
		expect(result.current).toHaveProperty('decrement')
		expect(typeof result.current.count).toBe('number')
		expect(typeof result.current.increment).toBe('function')
		expect(typeof result.current.decrement).toBe('function')
	})
	test('should maintain separate state for multiple instances of useCounter', () => {
		const { result: result1 } = renderHook(() => useCounter(5))
		const { result: result2 } = renderHook(() => useCounter(10))

		expect(result1.current.count).toBe(5)
		expect(result2.current.count).toBe(10)

		act(() => {
			result1.current.increment()
			result2.current.decrement()
		})

		expect(result1.current.count).toBe(6)
		expect(result2.current.count).toBe(9)

		act(() => {
			result1.current.decrement()
			result2.current.increment()
			result2.current.increment()
		})

		expect(result1.current.count).toBe(5)
		expect(result2.current.count).toBe(11)
	})
})
