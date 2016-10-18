/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
	var currentCode = str.charCodeAt(0);
	for (i = 0; i < str.length; i++) { 
		if (str.charCodeAt(i) === currentCode) { 
		currentCode += 1;
		}
		else { 
			return String.fromCharCode(currentCode);
		}
	}
	return undefined; 
}

console.log(fearNotLetter("abd"));