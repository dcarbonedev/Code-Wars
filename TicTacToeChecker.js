// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  // Check if there's a winner in rows or columns
  for(let i = 0; i < 3; i++) {
    if(board[i].filter(e => e === 1).length === 3) return 1;
    if(board[i].filter(e => e === 2).length === 3) return 2;
    if([board[0][i], board[1][i], board[2][i]].filter(e => e === 1).length === 3) return 1;
    if([board[0][i], board[1][i], board[2][i]].filter(e => e === 2).length === 3) return 2;
  }
  // Check if there's a winner in diagonals
  if([board[0][0], board[1][1], board[2][2]].filter(e => e === 1).length === 3) return 1;
  if([board[0][0], board[1][1], board[2][2]].filter(e => e === 2).length === 3) return 2;
  if([board[0][2], board[1][1], board[2][0]].filter(e => e === 1).length === 3) return 1;
  if([board[0][2], board[1][1], board[2][0]].filter(e => e === 2).length === 3) return 2;
  
  // Check for zeroes (nobody has won so if there are zeroes the game is incomplete)
  if([...board[0], ...board[1], ...board[2]].filter(e => e === 0).length > 0) return -1;
  
  // If nothing has been returned by this point it's a cat's game so we return zero
  return 0;
}