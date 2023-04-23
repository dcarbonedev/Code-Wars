// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string) {
  if(string === '') return null;
  let result = {};
  string = string.split('').filter(e => (e.charCodeAt(e) >= 65 && e.charCodeAt(e) <= 90) || 
                                         (e.charCodeAt(e) >= 97 && e.charCodeAt(e) <= 122)).join('');
  for(let i = 0; i < string.length; i++) {
    result[string[i]] = result[string[i]] || string.charCodeAt(i);
  }
  return result;
}