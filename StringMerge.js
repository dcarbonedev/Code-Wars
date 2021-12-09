// String Merge!

// Given two words and a letter, return a single word that's a combination of 
// both words, merged at the point where the given letter first appears in each word. 
// The returned word should have the beginning of the first word and the ending of the 
// second, with the dividing letter in the middle. You can assume both words will 
// contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

// THIS SOLUTION IS NOT GOOD! THERE ARE MUCH SHORTER WAYS USING ONLY SLICE

function stringMerge(string1, string2, letter) {
    let arr1 = string1.split('');
    let arr2 = string2.split('');
    let count = 0;
    let result = [];
    while(arr1[count] !== letter ) {
        result.push(arr1[count]);
        count++;
    }
    let newArr2 = arr2.filter( (e,i) => {
        if(i >= arr2.indexOf(letter) ) {
            return e;
        }
    });
    result = result.concat(newArr2);

    return result.join('');
}