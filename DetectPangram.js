// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least 
// once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a 
// pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False 
// if not. Ignore numbers and punctuation.

function isPangram(string){
  //Parameters: String
  //Return: Boolean (True if string is panagram, False if not)
  //Examples Below (test cases)

  //Pseudocode
  //split string into array of lower case letters
  let letters = string.toLowerCase().split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  //Loop through letter array to see if every letter of the alphabet is in the sentence
  for(let i = 0; i < alphabet.length; i++) {
    //If a letter is not present in the letters array then return false
    if(!letters.includes(alphabet[i])) {
      return false;
    }
  }
  
  //Return true (if all letters were found)
  return true;
}
  
  //Examples:
  console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
  console.log(isPangram("This is not a pangram."), false);