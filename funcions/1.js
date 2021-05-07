function oldRange(x, y) {
	var oldArray = []
	if (typeof x !== 'number' && typeof y !== 'number') {
		throw new Error('Only numbers can be provided!')
	} else {
		for (var i = x; i < y; i++) {
			oldArray.push(i)
		}
	}
	return oldArray
}

const newRange = (start, stop) =>
	Array.from({ length: stop - start }, (_, i) => start + i)

module.exports = {
	newRange,
	oldRange,
}
