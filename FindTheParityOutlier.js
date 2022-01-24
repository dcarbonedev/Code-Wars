// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very 
// large) containing integers. The array is either entirely comprised of odd integers 
// or entirely comprised of even integers except for a single integer N. Write a method
// that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {

    // Get the first 3 integers into a new array
    let firstThree = [integers[0], integers[1], integers[2]];
    // Filter the even numbers into a new array
    let evens = firstThree.filter(e => Math.abs(e % 2) === 0);
    // If there are 2 or more even numbers find the odd number and return it
    if(evens.length >= 2) {
        return integers.find( e => Math.abs(e % 2) === 1);
    }
    // (There is one even number) Find the even number and return it
    return integers.find( e => Math.abs(e % 2) === 0);
}