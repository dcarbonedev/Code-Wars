// Back and forth then Reverse!


// Task
// A list S will be given. You need to generate a list T from it by following the given process:

// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T

function arrange(s) {
    let t = [];
    let reversed = false;
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
      t.push(!reversed ? s[i] : s[s.length-1-i]);
      t.push(!reversed ? s[s.length-1-i] : s[i]);
      reversed = reversed ? false : true;
    }
    if(s.length % 2) t.push(s[Math.floor(s.length / 2)]);
    return t;
}