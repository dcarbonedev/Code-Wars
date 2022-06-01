// 6 kyu
// Sort the odd

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending 
// order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//****************************//
// Longer (more readable?) version
function sortArray(array) {
    let odds = array.filter(e => e % 2).sort((a,b) => a-b);
    let oddsRemoved = array.map(e => e % 2 ? '' : e);
    let oddsCount = 0;
    for(let i = 0; i < oddsRemoved.length; i++) {
      if(oddsRemoved[i] === '') {
        oddsRemoved[i] = odds[oddsCount++];
      }
    }
    return oddsRemoved;
}


//****************************//
// The Code Wars way
function sortArray(array) {
  let oddsCount = 0;
                                          // THIS SORT IS INEFFICIENT 
                                          // It has to run for every element 
  return array.map(e => e % 2 ? array.filter(e => e % 2).sort((a,b) => a-b)[oddsCount++] : e);
}


