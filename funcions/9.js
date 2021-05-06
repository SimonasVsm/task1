function sumNestedArrayValues(arr) {
	let sum = arr.flat(Infinity).reduce((acc, cur) => acc + cur)

	return sum
}

module.exports = {
	sumNestedArrayValues,
}
