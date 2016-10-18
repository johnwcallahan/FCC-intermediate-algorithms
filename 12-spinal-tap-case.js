// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    str = str.split(/(?=[A-Z])/).join(" ").toLowerCase();
	str = str.replace(/ (?! )/g, '-');
	str = str.replace(/_/g, '');
	return str.replace(/ /g, '');
}

console.log(spinalCase('This Is Spinal Tap'));