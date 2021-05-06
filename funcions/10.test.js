const { Calculator } = require('./10')

describe('calc', () => {
	it('calling add(5).multiply(2).add(20).divide(3) on calc returns 10', () => {
		// const calc = Calculator(0)
		const calc = new Calculator(0)
		const expected = 10
		const result = calc.add(5).multiply(2).add(20).divide(3).result
		expect(result).toEqual(expected)
	})
})
