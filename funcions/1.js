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

const newRange = (start, stop, step = 1) =>
	// -1 is to exclude stop parameter
	Array.from(
		{ length: (stop - 1 - start) / step + 1 },
		(_, i) => start + i * step
	)

module.exports = {
	newRange,
	oldRange,
}
