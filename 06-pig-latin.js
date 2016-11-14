/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word
and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end. */

function translatePigLatin(str) {
	var vowelIndex;
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) >= 0) {
			vowelIndex = i;
			break;
		}
	}
	if (vowelIndex === 0) {
		return str + 'way';
	}
	var firstPart = str.substr(vowelIndex);
	var secondPart = str.substr(0, vowelIndex) + 'ay';
	return firstPart + secondPart;
}

console.log(translatePigLatin("music"));