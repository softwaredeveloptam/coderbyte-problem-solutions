/**
 * Letter Changes Coderbyte Problem Solution
 * Take the string parameter being passed and modify it using the following algorithm. 
 * Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 * @summary Manipulating characters in a string based off their positions in the alphabet. 
 * @link https://coderbyte.com/information/Letter%20Changes
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */

// --- Test Cases ---

console.log(LetterChanges("hello*3")); // Ifmmp*3
console.log(LetterChanges("fun times!")); // gvO Ujnft!

// --- Helper Functions ---

/**
 * @param {String} string Takes a word or sentence
 * @returns {String} returns a modified string in accordance to the algorithm 
 */

function LetterChanges(string) {
    
    string = string.toLowerCase();
    let array = string.split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyza"
    
    for(let i = 0; i < array.length; i++) {
        if (alphabet.includes(array[i])) { 
            /** @function toNextAlphabetChar */
            array[i] = toNextAlphabetChar(alphabet, alphabet.indexOf(array[i]));
        }
        
        /** @function upperCaseVowels */
        array[i] = upperCaseVowels(array[i]);
    }

    let newStr = array.join("");

    return newStr;
}

/**
 * @param {String} letter  
 * @returns {String} Uppercase Vowel
 */

function upperCaseVowels(letter) {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return letter.toUpperCase();
    } else {
        return letter;
    }
}

/**
 * @param {String} alphabet 
 * @param {Number} position of the letter in the alphabet string
 * @returns {String} the next letter in the alphabet string
 */

function toNextAlphabetChar(alphabet, position) {
    position++;
    return alphabet.charAt(position);
}
