// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. 
// Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

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
      if(count1 > 1) {
        return set[1];
      }
      if(count2 > 1) {
        return set[0];
      }
    }
}