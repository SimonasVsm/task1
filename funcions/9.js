function sumNestedArrayValues(arr) {
	const reducer = (acc, cur) => acc + cur
	const finalArr = []

	function unnestArr(data) {
		data.map((item) => {
			if (typeof item !== 'number') {
				return unnestArr(item)
			} else {
				finalArr.push(item)
			}
		})
	}

	unnestArr(arr)
	console.log(finalArr)

	let sum = finalArr.reduce(reducer)
	return sum
}

console.log(sumNestedArrayValues([10, 6, [4, 8], 3, [6, 5, [9]]]))

module.exports = {
	sumNestedArrayValues,
}
