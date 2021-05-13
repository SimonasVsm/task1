const { oldRemoveDuplicates, newRemoveDuplicates } = require('./4')

describe('remove duplicates ', () => {
	const data = [1, 'hi', 2, 3, 1, 'hi']
	const expected = [1, 'hi', 2, 3]

	it('oldRemoveDuplicates(data) return [1, hi, 2, 3]', () => {
		const result = oldRemoveDuplicates(data)

		expect(result).toStrictEqual(expected)
	})

	it('oldRemoveDuplicates(data) return [1, hi, 2, 3]', () => {
		const result = newRemoveDuplicates(data)

		expect(result).toStrictEqual(expected)
	})
})
