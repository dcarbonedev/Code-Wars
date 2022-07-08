// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function (text) {
  let result = [];
  let letters = [...text];
  while(letters.length > 0) {
    result.push([letters[0], letters.reduce((a,c) => c === letters[0] ? a + 1 : a, 0)]);
    letters = letters.filter(e => e !== letters[0]);
  }
  return result;
}