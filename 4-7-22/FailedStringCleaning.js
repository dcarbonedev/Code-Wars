// 8 kyu
// String cleaning

// Your boss decided to save money by purchasing some cut-rate optical character 
// recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws 
// in a lot of numbers at random places in the text. For example:

// stringClean('! !') == '! !'
// stringClean('123456789') == ''
// stringClean('This looks5 grea8t!') == 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this 
// garbled text and remove all of the numbers. Your program will take in a string 
// and clean out all numeric characters, and return a string with spacing and special 
// characters ~#$%^&!@*():;"'.,? all intact.


/************ FAILED! ***************/
// In our attempt to remove extra spaces that weren't supposed to be there
// we are also removing spaces that should be there for example...
// if the given string it 'HE3LLO0     W0ORLD' it returns 'HELLO WORLD' 
//
// Try again and separate each word before removing numbers
// then join the words back together
function stringClean(s){
  let arr = s.split('');
  let cleanedArr = [];

  arr.forEach( (e) => { 
    if( Number.isNaN(parseInt(e, 10))) {
      cleanedArr.push(e);
    } 
  });

  // THIS WHOLE BIT ENDS UP BEING NOT NEEDED
  for(let i = 0; i < cleanedArr.length; i++) {
    if(cleanedArr[i] === ' ' && cleanedArr[i+1] === ' ') {
      cleanedArr.splice(i+1, 1);
      i--;
    }
  }
  return cleanedArr.join('');
}