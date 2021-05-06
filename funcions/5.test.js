const { oldWordSearch, newWordSearch } = require('./5')

describe('oldWordSearch, newWordSearch functions', () => {
	const existingWord = 'sit'
	const nonExistentWord = 'medis'

	it('oldWordSearch will find existing word and return false on nonexistent', () => {
		expect(oldWordSearch(existingWord)).toBeTruthy()
		expect(oldWordSearch(nonExistentWord)).not.toBeTruthy
	})

	it('newWordSearch will find existing word and return false on nonexistent', () => {
		expect(newWordSearch(existingWord)).toBeTruthy()
		expect(newWordSearch(nonExistentWord)).not.toBeTruthy
	})
})
