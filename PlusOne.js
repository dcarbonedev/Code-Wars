// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 
// Example:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Time complexity = O(2n) = O(n)
var plusOne = function(digits) {
    // O(1)
    digits[digits.length-1]++;
    
    // O(n)
    for(let i = digits.length-1; i >= 1; i--) {
      if(digits[i] === 10) {
        digits[i] = 0;
        digits[i-1]++;
      }
    }
    
    // O(n)
    if(digits[0] === 10) {
      digits[0] = 0;
      digits.unshift(1);
    }
    return digits;
};
  

// Time complexity = 0(n)
// Same theoretical time complexity but faster in practice
var plusOne = function(digits) {
  // O(1)
  digits[digits.length-1]++;

  // O(n)
  // Added break which will not help worst case time complexity
  // but will help cases that aren't worst case
  for(let i = digits.length-1; i >= 1; i--) {
      if(digits[i] === 10) {
          digits[i] = 0;
          digits[i-1]++;
      }else {
          break;
      }
  }

  // O(1)
  // Making the first digit 1 and pushing an extra 0 to the end
  // gives the same result as before but we get to use push instead
  // of unshift which makes this block O(1) instead of O(n)
  if(digits[0] === 10) {
      digits[0] = 1;
      digits.push(0);
  }
  return digits;    
};