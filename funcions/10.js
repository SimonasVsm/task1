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

var calc = new Calculator(0)

amount = calc.add(5).multiply(2).add(20).divide(3).result
console.log(amount)

module.exports = {
	Calculator,
}
