// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let nums = x.filter(e => typeof e === 'number');
    let strs = x.filter(e => typeof e === 'string');
    return nums.reduce((a,c) => a + c, 0) - strs.reduce((a,c) => a + +c, 0);
}