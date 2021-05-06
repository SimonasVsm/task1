const { oldMotto, newMotto } = require('./3')

describe('Motto functions block', () => {
	const name = 'Martell'
	const expected = 'Unbowed, Unbent, Unbroken'
	const falseMotto = 'Our Blades Are Sharp'

	it('oldMoto(Martell) returns Unbowed, Unbent, Unbroken ', () => {
		const result = oldMotto(name)

		expect(result).not.toEqual(falseMotto)
		expect(result).toBe(expected)
	})

	it('newMoto(Martell) returns Unbowed, Unbent, Unbroken ', () => {
		const result = newMotto(name)

		expect(result).toBe(expected)
	})
})
