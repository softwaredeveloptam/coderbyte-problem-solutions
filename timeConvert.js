/**
 * Time Convert Coderbyte Problem Solution
 * @summary Converts a whole number into amount of time in hours and minutes
 * @link https://coderbyte.com/information/Time%20Convert
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 * @param {Number} num  
 * @returns {Number} Time - returns the amount of hours/minutes from a whole number
 */

console.log(TimeConvert(150)); // 2:30

function TimeConvert(num) { 

    let hours = num/60;
    hours = Math.floor(hours);
    let minutes = num%60;
    
    let time = hours.toString() + ":" + minutes.toString();
    
    return time; 
    
}
  
