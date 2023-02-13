// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.

// Recursive solution (maybe not the best one? use cgd?)
function reduce(fraction) {
    let nume = fraction[0];
    let denom = fraction[1];
    let newFraction = [nume, denom];
    for(let i = 2; i <= Math.min(nume, denom); i++) {
      if(nume % i === 0 && denom % i === 0) {
        newFraction = [nume/i, denom/i];
      }
    }
    if(newFraction[0] === fraction[0] && newFraction[1] === fraction[1]) {
      return newFraction;
    }
    
    return reduce(newFraction);
}

// Just for fun: way less readable codewars style code
function reduce(f) {
  let temp = [f[0], f[1]];
  for(let i = 2; i <= Math.min(f[0], f[1]); i++) {
    if(!(f[0] % i) && !(f[1] % i)) {
      temp = [f[0]/i, f[1]/i];
    }
  }
  return temp[0] === f[0] && temp[1] === f[1] ? temp : reduce(temp);
}

// Non-recursive solution
function reduce(f) {
  for(let i = 2; i <= Math.min(f[0], f[1]); i++) {
    if(!(f[0] % i) && !(f[1] % i)) {
      f[0] = f[0] / i;
      f[1] = f[1] / i;
      i = 1;
    }
  }
  return f;
}