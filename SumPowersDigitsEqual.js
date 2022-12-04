// Numbers Which Sum of Powers of Its Digits Is The Same Number

// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]
// Enjoy it !!


// Using just math
function eqSumPowdig(hMax, exp) {
  let result = [];
  for(let i = 2; i <= hMax; i++) {
    let sum = 0;
    let num = i;
    while(num > 0) {
      sum += (num % 10)**exp;
      num = Math.floor(num / 10);
    }
    if(sum === i) result.push(sum);
  }
  return result;
}

// Using javascript reduce method
function eqSumPowdig(hMax, exp) {
  let result = [];
  for(let i = 2; i <= hMax; i++) {
    let sum = i.toString().split('').reduce((a,c) => a + c**exp, 0);
    if(sum === i) result.push(sum);
  }
  return result;
}