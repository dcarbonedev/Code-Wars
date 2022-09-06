// Framed Reflection

// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

// 'Hello World'

// would give:


// Words in your solution should be left-aligned.

function mirror(text) {
  text = text.split(' ');
  let longestWord = Math.max(...text.map(e => e.length));
  let result = '*'.repeat(longestWord + 4) + '\n';
  for(let i = 0; i < text.length; i++) {
    result += '* ' +[...text[i]].reverse().join('') +' '.repeat(longestWord - text[i].length + 1) +'*\n' ;
  }
  result += '*'.repeat(longestWord + 4);
  return result;
}