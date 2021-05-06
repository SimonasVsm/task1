const { add, addFive } = require('./6')

describe('add', () => {
	it('addFive(3) returns 8', () => {
		const result = addFive(3)
		const expected = 8
		expect(result).toEqual(expected)
	})

	it('First value provided to add function will be a base value for future adition ', () => {
		const addTem = add(10)
		const result = addTem(5)
		const expected = 15
		expect(result).toEqual(expected)
	})
})
