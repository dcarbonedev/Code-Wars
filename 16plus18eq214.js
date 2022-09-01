// 16+18=214

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
  num1 = [...num1.toString()].map(Number);
  num2 = [...num2.toString()].map(Number);
  let difference = Math.abs(num1.length - num2.length);
  let resArr = [];
  if(num1.length > num2.length) {
    for(let i = 0; i < difference; i++) {
      num2.unshift(0);
    }
  }
  
  if(num2.length > num1.length) {
    for(let i = 0; i < difference; i++) {
      num1.unshift(0);
    }
  } 
  
  for(let i = 0; i < Math.max(num1.length, num2.length); i++) {
    resArr.push( (num1[i] || 0) + (num2[i] || 0) );
  }
  
  return +resArr.join('');
}