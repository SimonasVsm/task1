const { say } = require('./11')

describe('say', () => {
	const val1 = 'Hello, '
	const val2 = 'it’s me'
	it(`retrun 'Hello, it's me' when called with provided values`, () => {
		const result = say(val1)(val2)
		const expected = `Hello, it’s me`

		expect(result).toEqual(expected)
	})
})
