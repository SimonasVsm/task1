function sevenAte9(list) {
	const arrFormList = list.split('')

	let finalArr = arrFormList.filter((item, index) => {
		if (
			arrFormList[index - 1] === '7' &&
			arrFormList[index + 1] === '7' &&
			item === '9'
		) {
			return
		} else {
			return item
		}
	})
	return finalArr.join('')
}

console.log(sevenAte9('7978777232977797'))

module.exports = {
	sevenAte9,
}
