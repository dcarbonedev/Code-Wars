// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd 
// indexes separately, and return as shown below. Index 0 will be considered 
// even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases 
// for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!
// If you like this Kata, please try:
// Indexed capitalization
// Even-odd disparity

function capitalize(s){
    let a = [...s].map((e,i) => !(i % 2) ? e.toUpperCase() : e.toLowerCase()).join('');
    let b = [...s].map((e,i) =>  (i % 2) ? e.toUpperCase() : e.toLowerCase()).join('');
    
    return [a,b];
};