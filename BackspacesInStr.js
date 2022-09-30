// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let arr = [...s];
    for(let i = 0; i <= arr.length; i++) {
      if(arr[0] === '#') {
        arr.shift();
        i = i-- > 0 ? i-- : 0;
      }
      else if(arr[i] === '#') {
        arr.splice(i-1, 2);
        i = i-2 > 0 ? i-2 : 0;
      } 
    }
    return arr.join('');
}