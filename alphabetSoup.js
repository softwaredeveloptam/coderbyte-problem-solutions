/** 
 * Alphabet Soup CoderByte Problem Solution
 * @summary Takes a word then returns the letters in alphabetical order 
 * @link https://coderbyte.com/information/Alphabet%20Soup#
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 * @param {string} string Takes an unsorted string.
 * @returns {string} Returns a Sorted Alphabetical String.
*/

// --- Tests ---

console.log(AlphabetSoup("coderbyte")); // bcdeeorty
console.log(AlphabetSoup("hooplah")); // ahhloop

// --- Helper Function ---

function AlphabetSoup(string) { 

    let array = string.split("");
    array.sort();
    let sortedString = array.join("");
    
    return sortedString; 

}