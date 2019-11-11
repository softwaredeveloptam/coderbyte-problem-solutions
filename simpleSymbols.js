/**
 * Simple Symbols Coderbyte Problem Solution
 * Have the function SimpleSymbols(str) take the str parameter being passed and determine 
 * if it is an acceptable sequence by either returning the string true or false. 
 * The str parameter will be composed of + and = symbols with several characters between them 
 * (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
 * So the string to the left would be false. The string will not be empty and will have at least one letter.
 * @summary Takes a string parameter and returns true/false if letters are surrounded by "+"
 * @link https://coderbyte.com/information/Simple%20Symbols
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 * @param {String} 
 * @returns {Boolean}
 */
// --- Tests ---

console.log(SimpleSymbols("+d+=3=+s+")); // true
console.log(SimpleSymbols("+d===+a+")); // false
console.log(SimpleSymbols("aaaa")); // false
console.log(SimpleSymbols("+a=")); // false
console.log(SimpleSymbols("==a+")); // false
console.log(SimpleSymbols("2+a+a+")); // true

// --- Helper Functions ---

/**
 * @param {String} str 
 * @returns {Boolean} 
 */

function SimpleSymbols(str) {

    let array = str.split("");

    for(let i = 0; i < array.length; i++) {
        if(array[i] != "+") {
            /** @function checkChar to see if the letter is surrounded by two "+" symbols */
            if(!checkChar(array[i-1], array[i], array[i+1])) {
                return false;
            }
        }
    }

    return true;
}

/**
 * @param {String} charLeft  
 * @param {String} charCheck 
 * @param {String} charRight
 */

function checkChar(charLeft, charCheck, charRight) {
    
    charCheck = charCheck.toLowerCase();
    inAlphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < inAlphabet.length; i++) {
        if(charCheck == inAlphabet.charAt(i)) {
            if(charLeft == "+" && charRight == "+") {
                return true;
            }
            else {
                return false;
            }
        }
    }

    return true;
}


 

