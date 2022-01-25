// Find the stray number

// You are given an odd-length array of integers, in which all of them are the same, 
// except for one single number.

// Complete the method which accepts such an array, and returns that single different 
// number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let setArr = Array.from(new Set(numbers));
    let firstNumArr = numbers.filter(e => e === setArr[0]);
    let secondNumArr = numbers.filter(e => e === setArr[1]);
    
    return firstNumArr.length === 1 ? setArr[0] : setArr[1];
}