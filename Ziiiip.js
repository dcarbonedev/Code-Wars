// Let's implement the zipObject function that enables such results

// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }

// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }
// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

// If only keys are given, then set the values to undefined.

// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }
// If neither keys nor values are specified, then return {}

// zipObject()
// {}

function zipObject(keys, values) {
    let result = {};
    
    // if array(s) are empty return an empty object
    if(!keys.length && !values) return {};
    
    // if values is not empty fill object using keys and values arrays
    if(values) {
      for(let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
      }
      return result;
    }
    // if the second item in the first "key" array is a number fill object
    // using only key array
    if(typeof keys[0][1] === 'number') {
      for(let i = 0; i < keys.length; i++) {
        result[keys[i][0]] = keys[i][1];
      }
      return result;
    }
    // if we make it to this point we use the keys from the key array as object keys
    // and set their values to undefined
    for(let i = 0; i < keys.length; i++) {
      result[keys[i]] = undefined;
    }
    return result;
}