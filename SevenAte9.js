// SevenAte9

// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

let sevenAte9 = s => [...s].filter((e,i,a) => !((e === '9' && a[i-1] === '7' && a[i+1] === '7'))).join('');