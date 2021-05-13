let symbolsToRemove = /[^A-Za-z0-9]/g
function oldWordSearch(word, text) {
	var wordIsPresent = false
	var textArr = text.toLowerCase().replace(symbolsToRemove, ' ').split(' ')
	for (var i = 0; i < textArr.length; i++) {
		if (textArr[i] === word) {
			wordIsPresent = true
		}
	}
	return wordIsPresent
}

function newWordSearch(word, text) {
	let includes = text
		.toLowerCase()
		.replace(symbolsToRemove, ' ')
		.split(' ')
		.includes(word)
	return includes
}

module.exports = {
	oldWordSearch,
	newWordSearch,
}
