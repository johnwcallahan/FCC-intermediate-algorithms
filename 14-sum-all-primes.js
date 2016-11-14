/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime 
number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible 
by itself.

The provided number may not be a prime. */

function sumPrimes(num) {
	var primes = [];
	for (var i = 2; i <= num; i++) {
		var count = 0;
		for (var j = 2; j < i; j++) {
			if (i % j === 0) {
				count += 1;
			}
		}
		if (count === 0) {
			primes.push(i);
		}
	}
	return primes.reduce(function(a, b) {
		return a + b;
	});
}

console.log(sumPrimes(10906));