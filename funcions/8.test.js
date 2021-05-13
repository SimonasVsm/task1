const { spy, myFunction } = require('./8')

describe('spy', () => {
	it('tracks how many times spied function is being called', () => {
		const spied = spy(myFunction)

		spied(1)
		spied(2)

		const result = spied.report()
		const expected = { totalCalls: 2 }

		expect(result).toMatchObject(expected)
	})
})
