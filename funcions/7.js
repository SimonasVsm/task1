function sevenAte9(list) {
	const arrFormList = list.split('')

	let finalArr = arrFormList.filter((item, index) => {
		if (
			arrFormList[index - 1] === '7' &&
			arrFormList[index + 1] === '7' &&
			item === '9'
		) {
			return false
		} else {
			return true
		}
	})
	return finalArr.join('')
}

module.exports = {
	sevenAte9,
}
