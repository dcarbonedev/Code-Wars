// 6 kyu
// CamelCase Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for 
// strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    let result = [];
    let str = this.trim();
    for(let i = 0; i < this.length; i++) {
      if(i === 0) {
        result.push(str[i].toUpperCase());
      }
      else if(str[i] === ' ') {
        result.push(str[i+1].toUpperCase());
        i++;
      }
      else {
        result.push(str[i]);
      }
    }
    return result.join('');
}