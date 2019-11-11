/**
 * Simple Adding Coderbyte Problem Solution
 * @summary Adds all numbers from 1 to Number Parameter
 * @link https://coderbyte.com/information/Simple%20Adding
 * @Author Tam Nguyen <softwaredeveloptam@gmail.com>
 * @param {Number} number 
 * @returns {Number} Sum of all the numbers between 1 to number given in parameter.
 */

function SimpleAdding(number) { 
    let sum = 0;
    
    for(let i = 0; i <= number; i++) {
      sum += i;
    }
    
    return sum; 
}