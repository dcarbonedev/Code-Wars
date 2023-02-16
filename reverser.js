// Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys

function reverse(n) {
  let newN = n;
  let digitCount = 0;
  let result = 0;
  while(newN > 0) {
    newN = Math.floor(newN/10);
    digitCount++;
  }
  let divisor = 10**(digitCount-1);
  while(n > 0) {
    result += (n % 10)*divisor;
    n = Math.floor(n/10);
    divisor /= 10;
  }
  return result;
}