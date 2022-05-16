// 7 kyu
// Smallest Product

// Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

// Example
// input = [
//   [1, 5],
//   [2],
//   [-1, -3]
// ]

// result = 2

function smallestProduct(arr) {
    // Code goes here
     let lowest = Infinity;
     let product = 1;
     for(let i = 0; i < arr.length; i++) {
       product = 1;
       for(let j = 0; j < arr[i].length; j++) {
         product *= arr[i][j];
       }
       if (product < lowest) lowest = product;
     }
     return lowest;
    
    }