const { oldWordSearch, newWordSearch } = require('./5')

describe('oldWordSearch, newWordSearch functions', () => {
	it('oldWordSearch will find existing word and return false on nonexistent', () => {
		expect(oldWordSearch('foo', 'foobar')).toBeFalsy()
		expect(oldWordSearch('foo', 'Foo bar')).toBeTruthy
	})

	it('newWordSearch will find existing word and return false on nonexistent', () => {
		expect(newWordSearch('foo', 'foobar')).toBeFalsy()
		expect(newWordSearch('foo', 'Foo bar')).toBeTruthy
	})
})
