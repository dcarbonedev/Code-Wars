// 7 kyu
// Row Weights

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, 
// the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, where the first one is the
// total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)

function rowWeights(array){
    let team1 = array.reduce( (acc, cur, idx) => {
      if(idx % 2 === 0) {
        return acc + cur;
      } else {
        return acc;
      }
    }, 0);
    
    let team2 = array.reduce( (acc, cur, idx) => {
      if(idx % 2 === 1) {
        return acc + cur;
      } else {
        return acc;
      }
    }, 0);
    
    return [team1, team2];
  }