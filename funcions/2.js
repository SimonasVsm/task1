function oldSum(list) {
	var finalValue = 0
	for (var i = 0; i < list.length; i++) {
		finalValue += list[i]
	}
	return finalValue
}

function newSum(list) {
	const reducer = (acc, cur) => acc + cur
	const finalVal = list.reduce(reducer)
	return finalVal
}

module.exports = {
	oldSum,
	newSum,
}
