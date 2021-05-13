const { say } = require('./11')

describe('say', () => {
	it(`return 'Hello, it's me' when called with provided values`, () => {
		const val1 = 'Hello, '
		const val2 = 'it’s me'
		const result = say(val1)(val2)
		const expected = `Hello, it’s me`

		expect(result).toEqual(expected)
	})
})
