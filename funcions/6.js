function add(x) {
	return function (y) {
		return y + x
	}
}

const addFive = add(5)

module.exports = {
	add,
	addFive,
}
