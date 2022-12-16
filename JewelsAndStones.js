// Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Jewels are always unique so we can use a set instead of an array
// this allows us to use set.has() (O(1)) rather than arr.includes() (O(n))
// making the whole function O(n) instead of O(n^2) time complexity
var numJewelsInStones = function(jewels, stones) {
    let jewelsSet = new Set(jewels);
    return stones.split('').reduce((a,c) => jewelsSet.has(c) ? a+1 : a, 0);
};