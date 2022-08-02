// Encrypt this!

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
  let result = [];
  let arr = text.split(' ');
  for(let word of arr) {
    console.log('word:', word);
    result.push(word.charCodeAt(0) + 
           (word.length > 1 ? word[word.length-1] : '') + 
           (word.slice(2, word.length-1) || '') + 
           (word.length > 2 ? word[1] : '')  );
  }
  return result.join(' ');
}