function add(x) {
	return function (y) {
		return y + x
	}
}

module.exports = {
	add,
}
