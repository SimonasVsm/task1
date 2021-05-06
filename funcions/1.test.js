const { newRange, oldRange } = require('./1')

describe('fill array with given range values', () => {
	let x = 1
	let y = 6
	const expected = [1, 2, 3, 4, 5]

	it(' newRange(1, 6) returns [1, 2, 3, 4, 5] ', () => {
		const result = newRange(x, y)

		expect(expected).toEqual(result)
	})

	it('oldRange(1, 6) returns [1, 2, 3, 4, 5]', () => {
		const result = oldRange(x, y)

		expect(expected).toEqual(result)
	})
})
