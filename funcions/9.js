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

	let sum = finalArr.reduce(reducer)
	return sum
}

module.exports = {
	sumNestedArrayValues,
}
