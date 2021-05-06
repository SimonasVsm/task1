function say(str) {
	let song = ''
	return function (y) {
		return song.concat(str).concat(y)
	}
}

console.log(say('Hello,')('it’s me'))

module.exports = {
	say,
}
