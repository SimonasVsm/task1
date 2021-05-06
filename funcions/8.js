// Create a simple function wrapper that will log every call to the wrapped function.
// Example:
// var spied = spy(myFunction);
// spied(1);
// var report = spied.report(); // returns { totalCalls: 1 }

function myFunction(val) {
	console.log(`called with value ${val}`)
}

function spy(val) {
	let spiedTimes = 0

	return function (func) {
		spiedTimes++
		func(val)
		const report = { totalcalls: spiedTimes }
		return report
	}
}

// function spy(func) {
// 	let spiedTimes = 0

// 	return {
// 		report() {
// 			spiedTimes++
// 			func()
// 			const report = { totalcalls: spiedTimes }
// 			return report
// 		},
// 	}
// }

let spied = spy(myFunction)
var report = spied.report()

// // console.log(spied)
spied(1)

// let spied2 = spy(console.log)

console.log(report)

// console.log(spied(2))

// var report = spied.report()
