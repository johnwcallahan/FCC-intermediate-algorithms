/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    var thousandsPlace = Math.floor(num / 1000);
    var hundredsPlace = Math.floor((num % 1000) / 100);
    var tensPlace = Math.floor((num % 100) / 10);
    var onesPlace = Math.floor((num % 10) / 1);

    var romanOnes;
    var romanTens;
    var romanHundreds;
    var romanThousands;

    if (onesPlace < 4) {
        romanOnes = Array(onesPlace + 1).join('I');
    } else if (onesPlace === 4) {
        romanOnes = 'IV';
    } else if (onesPlace === 5) {
        romanOnes = 'V';
    } else if (onesPlace < 9) {
        romanOnes = 'V' + Array((onesPlace - 5) + 1).join('I');
    } else {
        romanOnes = 'IX';
    }

    if (tensPlace === 0) {} else if (tensPlace < 4) {
        romanTens = Array(tensPlace + 1).join('X');
    } else if (tensPlace === 4) {
        romanTens = 'XL';
    } else if (tensPlace === 5) {
        romanTens = 'L';
    } else if (tensPlace < 9) {
        romanTens = 'L' + Array((tensPlace - 5) + 1).join('X');
    } else {
        romanTens = 'XC';
    }

    if (hundredsPlace === 0) {} else if (hundredsPlace < 4) {
        romanHundreds = Array(hundredsPlace + 1).join('C');
    } else if (hundredsPlace === 4) {
        romanHundreds = 'CD';
    } else if (hundredsPlace === 5) {
        romanHundreds = 'D';
    } else if (hundredsPlace < 9) {
        romanHundreds = 'D' + Array((hundredsPlace - 5) + 1).join('C');
    } else {
        romanHundreds = 'CM';
    }

    if (thousandsPlace === 0) {} else {
        romanThousands = Array(thousandsPlace + 1).join('M');
    }

    var romanDigits = [];
    romanDigits.push(romanThousands, romanHundreds, romanTens, romanOnes);
    var romanNumeral = romanDigits.filter(function(n) {
        return n !== undefined;
    });
    return romanNumeral.join('');
}

console.log(convertToRoman(36));