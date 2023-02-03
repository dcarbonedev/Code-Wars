/*
5! = 5 * 4 * 3 * 2 * 1
4! = 4 * 3 * 2 * 1
so... 5! = 5 * 4!

base case: 0! = 1
general case: n! = n * (n-1)!
*/

function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n-1);
}
  
  console.log(factorial(5), 120);
  console.log(factorial(1), 1);
  console.log(factorial(0), 1);
  console.log(factorial(2), 2);
  console.log(factorial(8), 40320);