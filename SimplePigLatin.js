// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let words = str.split(' ');  
  for(let i = 0; i < words.length; i++) {
    if(words[i] !== '!' && words[i] !== '?') {
      let letters = words[i].split('');
      letters.push(letters[0]);
      letters.shift();
      letters.push('ay');
      words[i] = letters.join('');
    }
  }
  return words.join(' ');
}