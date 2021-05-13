const { oldSum, newSum } = require('./2')

describe('sum block', () => {
	const array = [1, 2, 3, 4, 5]
	const expected = 15

	it('oldSum returns 15 with provided array', () => {
		const result = oldSum(array)
		expect(result).toEqual(expected)
	})

	it('oldSum returns 15 with provided array', () => {
		const result = newSum(array)

		expect(result).toEqual(expected)
	})
})
