// Are we alternate?

// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true
// Arguments consist of only lowercase letters.

function isAlt(word) {
  let cons = 'bcdfghjklmnpqrstvwxyz';
  let vowels = 'aeiou';
  for(let i = 1; i < word.length; i++) {
    if( cons.includes(word[i-1]) && cons.includes(word[i]) ||
        vowels.includes(word[i-1]) && vowels.includes(word[i]) ) {
      return false;
    }
  }
  return true;
}