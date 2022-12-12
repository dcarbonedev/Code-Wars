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