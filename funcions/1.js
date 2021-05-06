function oldRange(x, y) {
	var oldArray = []
	if (typeof x !== 'number' && typeof y !== 'number') {
		throw new Error('Only numbers can be provided!')
	} else {
		for (let i = x; i < y; i++) {
			oldArray.push(i)
		}
	}
	return oldArray
}

// var oldArray = []
// function oldRange(x, y) {
// 	if (typeof x !== 'number' && typeof y !== 'number') {
// 		throw new Error('Only numbers can be provided!')
// 	} else {
// 		if (x < y) {
// 			oldArray.push(x)
// 			return oldRange(x + 1, y)
// 		} else {
// 			return oldArray
// 		}
// 	}
// }

console.log(oldRange(1, 6))

module.exports = {
	newRange,
	oldRange,
}
