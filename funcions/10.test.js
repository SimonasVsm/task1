const { Calculator, Calculator2 } = require('./10')

describe('Test Calculator functions', () => {
	it('should return 10 when add(5).multiply(2).add(20).divide(3) is called on "calc" ', () => {
		const calc = new Calculator(0)
		const expected = 10
		const result = calc.add(5).multiply(2).add(20).divide(3).result
		expect(result).toEqual(expected)
	})

	it('should return 10 when add(5).multiply(2).add(20).divide(3) is called on "calc2" ', () => {
		const calc2 = new Calculator2(0)
		const expected = 10
		const result = calc2.add(5).multiply(2).add(20).divide(3).result
		expect(result).toEqual(expected)
	})
})
