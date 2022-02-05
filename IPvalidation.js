// IP Validation

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs 
// should be considered valid if they consist of four octets, with values between 0 and 
// 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    let sections = str.split('.');
    if(sections.length !== 4) return false;
    if(sections.includes('')) return false;
    
    for(let i = 0; i < sections.length; i++) {
      if(sections[i].includes(' ') || sections[i].includes('\n')) return false;
      if(sections[i].includes('e')) return false;
      if(!(Number.isInteger(Number(sections[i])))) return false;
      if(sections[i] < 0 || sections[i] > 255) return false;
      if(sections[i].length > 1 && sections[i][0] === '0') return false;
    }
    return true;
}