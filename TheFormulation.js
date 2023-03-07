// There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly. If only I had a time machine...

// Oh well! Anyhow, using the following formula:

// Angle (in Radians) === Arc length / Radius length
// Write a function thetaFormula:

// When given two of the values and "?" returns the number value of the missing one.
// When given all three values returns a boolean value verifying if the statement is true or false.
// When given one or no values as arguments or invalid arguments returns null.
// For Example:

//     thetaFormula("?", 12, 35)        -->    0.343
//     thetaFormula(3, "?", 14)         -->    42
//     thetaFormula(5, 16, "?")         -->    3.2

//     thetaFormula(2, 5, 7)            -->    false
//     thetaFormula(2, 20, 10)          -->    true
//     thetaFormula( -1, 1, -1)         -->    true

//     thetaFormula(1, 2)               -->   null
//     thetaFormula(1)                  -->   null
//     thetaFormula()                   -->   null
//     thetaFormula("?", "?", 2)        -->   null
// If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places. The function should be able to return negative values, they will be tested for.

function thetaFormula(rad, arc, ang) {
    let result = 0;
    if(!rad || !arc || !ang) return null;
    if([rad,arc,ang].filter(e => e === '?').length > 1) return null;
    
    if([rad,arc,ang].filter(e => e === '?').length === 0) {
      if(typeof rad !== 'number' || typeof arc !== 'number' || typeof ang !== 'number') return null; 
      return ang === arc / rad;
    }
    
    if(rad === '?') result = arc / ang;
    if(arc === '?') result = ang * rad;
    if(ang === '?') result = arc / rad;
    
    return parseFloat(result.toFixed(3));  
}