function Calculator(num) {
	this.result = num

	this.add = function (num) {
		this.result += num
		return this
	}
	this.subtract = function (num) {
		this.result -= num
		return this
	}
	this.multiply = function (num) {
		this.result *= num
		return this
	}
	this.divide = function (num) {
		this.result /= num
		return this
	}
}

class Calculator2 {
	constructor(result) {
		this.result = result
	}

	multiply(num) {
		this.result *= num
		return this
	}
	add(num) {
		this.result += num
		return this
	}
	divide(num) {
		this.result /= num
		return this
	}
}

module.exports = {
	Calculator,
	Calculator2,
}
