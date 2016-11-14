/* Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is 
evenly divisible by all numbers between 1 and 3. */

function smallestCommons(arr) {
	function primeGen(n) { //function to generate prime numbers up and including n 
		var primes = [];
		for (var i = 2; i <= n; i++) {
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
		return primes;
	}

	function primeFactors(n) { //function to generate prime factors of n 
		var primes = primeGen(n);
		var primeCount = 0;
		var factors = [];

		function breakDown(n) {
			if (n === 1) {
				factors.push(n);
				return factors;
			} else if (primes.indexOf(n) >= 0) {
				factors.push(n);
				return factors;
			} else if (n % primes[primeCount] === 0) {
				factors.push(primes[primeCount]);
				return breakDown(n / primes[primeCount]);
			} else {
				primeCount += 1;
				return breakDown(n);
			}
		}
		return breakDown(n);
	}

	//create data scructure to hold prime factors of each number in range
	var larger = Math.max(arr[0], arr[1]);
	var smaller = Math.min(arr[0], arr[1]);
	var factors = {};
	for (var j = smaller; j <= larger; j++) {
		factors[j] = primeFactors(j);
	}


	//create data structure to keep track of largest occurence of each factor 
	var allPrimes = primeGen(larger);
	var factorOccurence = {};
	for (var i = 0; i < allPrimes.length; i++) {
		factorOccurence[allPrimes[i]] = 0;
	}

	//loop through prime factors to find the largest occurence of each
	for (var primeKey in factorOccurence) {
		for (var factorKey in factors) {
			var factorCount = 0;
			for (i = 0; i < factors[factorKey].length; i++) {
				if (factors[factorKey][i] === parseInt(primeKey)) {
					factorCount += 1;
				}
				if (factorCount > factorOccurence[primeKey]) {
					factorOccurence[primeKey] = factorCount;
				}
			}
		}
	}

	//return multiplied factors 
	var lcm = 1;
	for (var key in factorOccurence) {
		lcm *= Math.pow(parseInt(key), factorOccurence[key]);
	}
	return lcm;
}

console.log(smallestCommons([9, 5]));