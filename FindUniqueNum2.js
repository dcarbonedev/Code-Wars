// 6 kyu
// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


//*********************//
// This solution has less lines of code and is less complex
// BUT it has to run through every item in (a possibly large) array
// with the reduce function which is less efficient
// SEE old solution below it's more code but more efficient?
function findUniq(arr) {
    let set = Array.from(new Set(arr));
    let count1 = arr.reduce((a,c) => c === set[0] ? a+1 : a, 0);
    let count2 = arr.reduce((a,c) => c === set[1] ? a+1 : a, 0);
    return count1 > count2 ? set[1] : set[0];
}

//**********************//
// Old (more efficient?) solution
function findUniq(arr) {
    let set = Array.from(new Set(arr));
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < arr.length; i++) {    
      if(set[0] === arr[i]) {
        count1++;
      }
      if(set[1] === arr[i]) {
        count2++;
      }
      //********************//
      // Loop returns as soon as we see one of the numbers twice
      // so it doesn't have to loop more than a few times
      if(count1 > 1) {
        return set[1];
      }
      if(count2 > 1) {
        return set[0];
      }
    }
}