// 169. Majority Element
// Easy
// 13K
// 417
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time complexity
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        }else {
            obj[nums[i]] = 1;
        }
    }

    let maxCount = 0;
    let maxNum = null;

    for(let num in obj) {
        if(obj[num] > maxCount) {
            maxCount = obj[num];
            maxNum = num;
        }
    }
    return maxNum;
};

// Same O(n) time complexity but only 1 loop instead of 2
var majorityElement = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        }else {
            obj[nums[i]] = 1;
        }
        if(obj[nums[i]] > Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
};