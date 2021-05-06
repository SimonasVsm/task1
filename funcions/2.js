function oldSum(list) {
	var finalValue = 0
	for (var i = 0; i < list.length; i++) {
		finalValue += list[i]
	}
	return finalValue
}

function newSum(list) {
	const finalVal = list.reduce((acc, cur) => acc + cur, 0)
	return finalVal
}

module.exports = {
	oldSum,
	newSum,
}
