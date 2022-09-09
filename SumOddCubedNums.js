// Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  if(arr.filter(e => Number.isInteger(e)).length === arr.length) {
    return arr.reduce((a,c) => c % 2 ? a + c**3 : a ,0);
  }
}  