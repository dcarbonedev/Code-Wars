// You have a two-dimensional list in the following format:

// data = [[2, 5], [3, 4], [8, 7]]
// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

// For input, you can trust that neither the main list nor the sublists will be empty.

// Traditional for loop
function processData(data) {
  let result = 1;
  for(let i = 0; i < data.length; i++) {
    result *= (data[i][0] - data[i][1]);
  }
  return result;
}

//codewars style one-liner using reduce fubction
const processData = data => data.reduce((a,c) => (c[0] - c[1]) * a, 1);