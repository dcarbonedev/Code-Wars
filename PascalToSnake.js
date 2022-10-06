// Convert PascalCase string into snake_case

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
    if(typeof string === 'number') return String(string);
    let arr = [];
    let wordStart = 0;
    for(let i = 1; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase() && Number.isNaN(parseInt(string[i]))) {
        arr.push(string.slice(wordStart, i));
        wordStart = i;
      }
      if(i === string.length-1) arr.push(string.slice(wordStart)); 
    }
    return arr.join('_').toLowerCase();
}