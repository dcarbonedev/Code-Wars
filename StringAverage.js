// String average

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
    if(str.length === 0) return 'n/a';
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let compare = str.split(' ').filter(e => nums.includes(e)).join(' ');
    let sum = str.split(' ').reduce((a,c) => a + nums.indexOf(c), 0);
    return str === compare ? nums[Math.floor(sum / str.split(' ').length)] : 'n/a';
}