// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// Traditional for loop
function vowel2index(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result += 'aeiouAEIOU'.includes(str[i]) ? i+1 : str[i];
  }
  return result;
}

// codewars one-liner using map function
const vowel2index = str => str.split('').map((e,i) => 'aeiouAEIOU'.includes(e) ? i+1 : e).join('');