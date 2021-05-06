const { newRange, oldRange } = require('./1')

describe('function fills array wiht values [x, y)', () => {
	let x = 1
	let y = 6
	const expected = [1, 2, 3, 4, 5]

	it(' newRange(1, 6) returns [1, 2, 3, 4, 5] ', () => {
		const result = newRange(x, y)

		expect(expected).toEqual(result)
	})

	it('oldRange(1, 6) returns [1, 2, 3, 4, 5, 6]', () => {
		const result = oldRange(x, y)

		expect(expected).toEqual(result)
	})
})
