function say(str) {
	let song = ''
	return function (y) {
		return song.concat(str).concat(y)
	}
}

module.exports = {
	say,
}
