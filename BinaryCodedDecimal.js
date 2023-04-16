// Convert a number to a binary coded decimal (BCD).

// You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

// Ex.

// n =  10 -> "0001 0000"
// n = -10 -> "-0001 0000"

function toBcd(number) {
  if(number === 0) return '0000';
  let result = '';
  let negative = number < 0;
  number = Math.abs(number);
  while(number > 0) {
    result = (number % 10).toString(2).padStart(4, '0') +' ' + result;
    number = Math.floor(number / 10);
  }
  return (negative ? '-' : '') + result.trim();
}