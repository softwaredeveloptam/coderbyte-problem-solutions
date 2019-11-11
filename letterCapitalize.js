/** 
 * Letter Capitalize Coderbyte Problem Solution
 * @summary Capitalizes the First Letter in every Word inside a String
 * @link https://coderbyte.com/editor/First%20Reverse:JavaScript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
*/

// --- Tests ---

console.log(LetterCapitalize("hello world")); // Hello World
console.log(LetterCapitalize("i ran there")); // I Ran There

// --- Helper Functions ---

/**
 * @param {String} sentence 
 * @param {String} sentence returns string with capitalize first letters in every word
 */

function LetterCapitalize(sentence) { 

    let individualWords = sentence.split(" ");
    
    for(let i = 0; i < individualWords.length; i++) {
        /** @function capitalizeFirst */
        individualWords[i] = capitalizeFirst(individualWords[i]);
    }

    sentence = individualWords.join(" ");
    
    return sentence; 
  
}

/**
 * @param {String} word 
 * @returns {String} Returns word with Capitalized First Letter
 */

function capitalizeFirst(word) {
    
    let letter = word.split("");
    letter[0] = letter[0].toUpperCase();
    word = letter.join("");

    return word;
}