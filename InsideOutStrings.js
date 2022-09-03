// Inside Out Strings

// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
  let words = x.split(' ');
  for(let i = 0; i < words.length; i++) {
    if(words[i].length % 2 === 0) {
      words[i] = words[i].slice(0, words[i].length/2).split('').reverse().join('')
      + words[i].slice(words[i].length - words[i].length/2).split('').reverse().join('');
    } else {
      words[i] = words[i].slice(0, words[i].length/2).split('').reverse().join('')
      + words[i][(Math.floor(words[i].length/2))]
      + words[i].slice(words[i].length - (words[i].length/2)+1).split('').reverse().join('');
    }
  }
  return words.join(' ');
}