// 7 kyu
// Alternate case

// Write function alternateCase which switch every letter in string from upper to lower 
// and from lower to upper. E.g: Hello World -> hELLO wORLD

let alternateCase = s => [...s].map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');