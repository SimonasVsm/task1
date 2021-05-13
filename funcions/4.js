function oldRemoveDuplicates(array) {
	var newArray = []
	var valIsPresent = false
	for (var i = 0; i < array.length; i++) {
		for (var x = 0; x < newArray.length; x++) {
			if (newArray[x] === array[i]) {
				valIsPresent = true
			}
		}
		valIsPresent ? null : newArray.push(array[i])

		valIsPresent = false
	}
	return newArray
}

function newRemoveDuplicates(array) {
	return Array.from(new Set(array))
}

module.exports = {
	oldRemoveDuplicates,
	newRemoveDuplicates,
}
