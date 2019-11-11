/** 
 * First Reverse CoderByte Problem Solution
 * @summary Takes a string and returns a string in reverse order
 * @link https://coderbyte.com/editor/First%20Reverse:JavaScript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
*/

// --- Tests ---

console.log(FirstReverse("coderbyte")); // etybredoc
console.log(FirstReverse("I Love Code")); // edoC evoL I

// --- Helper Functions ---

/**
 * @param {string} string Takes a word or sentence
 * @returns {string} Returns a word or sentence in reverse order
 */

function FirstReverse(string) {
    let unsortedArray = string.split('');
    
    /** @function sortArray */
    let sortedArray = sortArray(unsortedArray); 
    string = sortedArray.join('');

    return string;
}

/**
 * @param {Array} array Words split inside an array 
 * @returns {Array} Returns the words in reverse order
 */

function sortArray(array) {
    
    for(var i = 0; i < Math.min(array.length/2); i++) {
        let temp = array[i];
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = temp;
    }

    return array;
}

