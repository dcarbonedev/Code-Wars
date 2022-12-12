// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// Solution is O(4n) = O(n) ?
function mostChars(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]]++;
    }else {
      obj[str[i]] = 1;
    }
  }
  let highestValue = Math.max(...Object.values(obj));
  return Object.keys(obj).find(key => obj[key] === highestValue);
}


// Same time complexity, no array methods
function mostChars2(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]]++;
    }else {
      obj[str[i]] = 1;
    }
  }
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let highestValue = Math.max(...values);
  for(let i = 0; i < keys.length; i++) {
    if(values[i] === highestValue) {
      return keys[i];
    }
  }
}


// Same time complexity, no methods, pure loops
function mostChars(str) {
  let chars = {};
  for(let i = 0; i < str.length; i++) {
    if(chars[str[i]]) {
      chars[str[i]]++;
    }else {
      chars[str[i]] = 1;
    }
  }
  let max = 0;
  let maxChar = null;
  for(char in chars) {
    if(chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}