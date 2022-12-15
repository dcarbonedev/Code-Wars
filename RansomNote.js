// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });


// O(n) time xomplexity
function ransomNote(note, mag) {
  let magObj = {};
  let noteObj = {};
  let magWords = mag.split(' ');
  let noteWords = note.split(' ');
  
  for(const word of magWords) {
    magObj[word] = magObj[word] + 1 || 1;
  }

  for(const word of noteWords) {
    noteObj[word] = noteObj[word] + 1 || 1;
  }

  for(const word in noteObj) {
    if(!magObj[word] || magObj[word] < noteObj[word]) {
      return false;
    }
  }
  return true;
}

