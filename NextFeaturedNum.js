// Next Featured Number Higher than a Given Value

// Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

// their digits occur only once

// they are odd

// they are multiple of three

// nextNumb(12) == 15

// nextNumb(13) == 15

// nextNumb(99) == 105

// nextNumb(999999) == 1023459

// nextNumber(9999999999) == "There is no possible number that
// fulfills those requirements"

function nextNumb(val) {
  for(let i = val+1; i <= 999999999; i++) {
    let str = i.toString();
    let setStr = Array.from(new Set(str)).join('');
    if(str === setStr && i % 2 && !(i % 3)) {
      return i;
    }
  }
  return 'There is no possible number that fulfills those requirements';
}