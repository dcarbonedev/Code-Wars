// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// More info at: http://en.wikipedia.org/wiki/Sudoku

// Sudoku Solution Validator
// Write a function that accepts a Sudoku board, and returns true if it is a valid Sudoku solution, or false otherwise. The cells of the input Sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// Examples
// Valid board:

//   5 3 4|6 7 8|9 1 2
//   6 7 2|1 9 5|3 4 8
//   1 9 8|3 4 2|5 6 7
//   -----+-----+-----
//   8 5 9|7 6 1|4 2 3
//   4 2 6|8 5 3|7 9 1
//   7 1 3|9 2 4|8 5 6
//   -----+-----+-----
//   9 6 1|5 3 7|2 8 4
//   2 8 7|4 1 9|6 3 5
//   3 4 5|2 8 6|1 7 9
// Invalid board:
                
//               This column has two 3's
//                         v
// This cell has a 0 > 0 3 4|6 7 8|9 1 2
//                     6 7 2|1 9 5|3 4 8
//                     1 9 8|3 4 2|5 6 7
//                     -----+-----+-----
//                     8 5 9|7 6 1|4 2 3
//                     4 2 6|8 5 3|7 9 1
//                     7 1 3|9 2 4|8 5 6
//                     -----+-----+-----
//     This box has   /9 6 1|5 3 7|2 8 4
//          two 3's >| 2 8 3|4 1 9|6 3 5 < This row has two 3's
//                    \3 4 5|2 8 6|1 7 9
// Details
// All inputs are guaranteed to be 2D boards of size 9x9 with possible values in range 0-9.
// Rows, columns and blocks (3x3 small squares) must contain each number from range 1-9 exactly once.
// User solution must not modify input boards.

function validateSudoku(board) {
  let columns = [];
  let boxes = [];
  let temp = [];
  
  //Get Columns
  for(let col = 0; col < 9; col++) {
    for(let row = 0; row < 9; row++) {
      temp.push(...[board[row][col]]);
    }
    columns.push(temp);
    temp = [];
  }
  
  // GET BOXES
  temp = [];
  for(let i = 0; i < 27; i++) {
    if(i < 9) temp.push(...board[i].slice(0,3));
    else if(i >= 9 && i < 18) temp.push(...board[i-9].slice(3,6));
    else if(i >= 18) temp.push(...board[i-18].slice(6,9));
    if((i+1) % 3 === 0) {
      boxes.push(temp);
      temp = [];
    }
  }
  return isValid(board) && isValid(columns) && isValid(boxes);
}

function isValid(b) {
  for(let i = 0; i < 9; i++) {
    let obj = {};
    for(let j = 0; j < 9; j++) {
      if(!obj[b[i][j]] && b[i][j]) {
        obj[b[i][j]] = 1;
      }
    }
    for(let k = 1; k <= 9; k++) {
      if(!obj[k]) return false;
    }
  }
  return true;
}

// ---------------------------------------------------------------------
// Slightly simpler and more readable solution
function validateSudoku(board) {
  let column = [];
  let box = [];
  
  // Check Rows
  for(let i = 0; i < board.length; i++) {
    if(!isValid(board[i])) return false;
  }
  
  // Check Columns
  for(let col = 0; col < 9; col++) {
    for(let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if(!isValid(column)) return false;
    column = [];
  }
  
  // Check Boxes
  for(let i = 0; i < 27; i++) {
    if(i < 9) box.push(...board[i].slice(0,3));
    else if(i >= 9 && i < 18) box.push(...board[i-9].slice(3,6));
    else if(i >= 18) box.push(...board[i-18].slice(6,9));
    if((i+1) % 3 === 0) {
      if(!isValid(box)) return false;
      box = [];
    }
  }
  return true;
}

function isValid(arr) {
  for(let i = 1; i <= 9; i++) {
    if(!arr.includes(i)) return false;
  }
  return true;
}