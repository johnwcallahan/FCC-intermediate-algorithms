/* Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a 
Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number 
is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 
are 1, 1, and 3. */

function sumFibs(num) {
	function getFibs(num, fibs) {
		if (fibs[fibs.length - 1] + fibs[fibs.length - 2] > num) {
			return fibs;
		} else {
			fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
			return getFibs(num, fibs);
		}
	}
	var fibs = [1, 1];
	var allFibs = getFibs(num, fibs);
	var oddFibs = [];
	for (var i = 0; i < allFibs.length; i++) {
		if (allFibs[i] % 2 !== 0) {
			oddFibs.push(allFibs[i]);
		}
	}
	return oddFibs.reduce(function(a, b) {
		return a + b;
	});
}

console.log(sumFibs(90));