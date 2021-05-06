let text =
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus vero voluptatum enim, maiores neque odio incidunt tempora aliquid! Nemo iusto ipsam quae quos odit soluta in nobis a doloribus?'

let symbolsToRemove = /[^A-Za-z0-9]/g
function oldWordSearch(w) {
	var wordIsPresent = false
	var textArr = text.toLowerCase().replace(symbolsToRemove, ' ').split(' ')
	for (var i = 0; i < textArr.length; i++) {
		if (textArr[i] === w) {
			wordIsPresent = true
		}
	}
	return wordIsPresent
}

console.log(oldWordSearch('suo'))

function newWordSearch(w) {
	let includes = text.toLowerCase().replace(symbolsToRemove, ' ').includes(w)
	return includes
}

console.log(newWordSearch('suo'))

module.exports = {
	oldWordSearch,
	newWordSearch,
}
