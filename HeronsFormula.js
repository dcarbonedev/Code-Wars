// Heron's formula

// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

// Heron's formula:

// s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
// s∗(s−a)∗(s−b)∗(s−c)
// ​
 
// where

// s=a+b+c2s = \frac{a + b + c} 2s= 
// 2
// a+b+c
// ​
 
// Output should have 2 digits precision.

function heron(a,b,c) {
    let s = (a+b+c)/2;
    let result = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  //   result = Math.trunc(result * 100) / 100;
    return Math.trunc(result);
  }