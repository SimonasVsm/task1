function myFunction() {
	const data = 'myFunction was called'
	return data
}

function spy(func) {
	let spiedTimes = 0

	const wrapper = function () {
		spiedTimes++

		return func()
	}

	wrapper.report = function () {
		return { totalCalls: spiedTimes }
	}

	return wrapper
}

module.exports = {
	myFunction,
	spy,
}
