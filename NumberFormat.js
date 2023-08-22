// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.

var numberFormat = function (n) {
    let neg = n < 0;
    n = n.toString();
    let result = '';
    if(neg) n = n.slice(1);
    
    if(n.length % 3 === 1) {
      result += n[0];
      n = n.slice(1);
    }
    else if(n.length % 3 === 2) {
      result += n[0] +n[1];
      n = n.slice(2);
    }
    
    for(let i = 0; i < n.length; i+=3) {
      result += ',' + n.slice(i, i+3);        
    }
    result = result[0] === ',' ? result.slice(1) : result;
    return neg ? ('-' + result) : result;
};