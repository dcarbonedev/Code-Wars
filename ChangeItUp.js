// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let vowels = 'AEIOUaeiou';
    let cons = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
    str = str.split('').map(e => alpha.includes(e) ? 
      alpha[alpha.indexOf(e) === 51 ? 26 : alpha.indexOf(e) === 25 ? 0 : alpha.indexOf(e)+1] : e);
    str = str.map(e => vowels.includes(e) ? e.toUpperCase() : e);
    str = str.map(e => cons.includes(e) ? e.toLowerCase() : e);
    return str.join('');
}