const { sumNestedArrayValues } = require('./9')

describe('sumNestedArrayValues()', () => {
	const arrayToSum = [10, 6, [4, 8], 3, [6, 5, [9]]]
	const expected = 51

	it('returns expected value when provided the arrayToSum', () => {
		const result = sumNestedArrayValues(arrayToSum)
		expect(result).toEqual(expected)
	})
})
