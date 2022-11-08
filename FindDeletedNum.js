// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

//**********//
// get 2 arrays, one ordered one mixed 
// return missing number in second array if there is one or return 0
// array1 may have any amount of numbers including 1 or 0

//*** Done with filter & includes methods - O(n^2) time ***// 
function solve1(arr1, arr2) {
    // if no missing number filter[0] will be undefined and solve function will return 0
    return arr1.filter(e => !arr2.includes(e))[0] || 0;   
}

//*** Better solution in O(n) time w/ old syntax (more readable than ES6?)  ***//
//*** The missing number will be the difference of the sums of the 2 arrays ***//
function solve2(arr1, arr2) {
  let sum1 = arr1.reduce(function(a,c) {
    return a + c;
  }, 0);

  let sum2 = arr2.reduce(function(a,c) {
    return a + c;
  }, 0);

  return sum1 - sum2;
}

//*** Same O(n) time soultion w/ full ES6, one liner syntax ***// 
const solve3 = (a1, a2) => a1.reduce((a,c) => a + c, 0) - a2.reduce((a,c) => a + c, 0);


//*** BEST practial solution from time complexity standpoint ***//
// Theoretically it's still O(n) worst case but practically some //
// cases will be O(1) because of the guard clause and the first //
// sum using gauss's theorm cuts num of operations in half //
function solve4(arr1, arr2) {
  // Will exit function in O(1) time for these cases
  if(arr1.length === arr2.length) return 0;
  if(arr1.length === 1 && arr2.length === 0) return arr1[0];

  // Summation formula makes this step O(1)
  let sum1 = arr1[arr1.length-1] * ( (arr1[0] + arr1[arr1.length-1]) / 2 )

  // This is the most expensive step at O(n)
  let sum2 = arr2.reduce((a,c) => a + c, 0);

  return sum1 - sum2;
}