const { sevenAte9 } = require('./7')

describe('sevenAte9', () => {
	const providedString = '7978777232977797'
	const expected = '77877723297777'

	it('sevenAte9(providedString) returns expected value', () => {
		const result = sevenAte9(providedString)

		expect(result).toBe(expected)
	})
})
