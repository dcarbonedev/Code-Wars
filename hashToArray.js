// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!

function convertHashToArray(hash) {
    let result = [];
    let keys = Object.keys(hash);
    keys.sort((a,b) => a.localeCompare(b));
    for(let i = 0; i < keys.length; i++) {
      result.push([keys[i], hash[keys[i]]]);
    }
    return result;
}