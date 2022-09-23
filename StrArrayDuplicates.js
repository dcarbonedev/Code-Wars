// String array duplicates

// In this challenge, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(arr) {
    return arr
      .map((e,i) => [...e]
           .filter((el,idx) => el !== arr[i][idx-1])
      .join(''));
}