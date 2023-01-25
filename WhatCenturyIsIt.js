// What century is it?

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
    let c ='';
    if(!(Number(year) % 100)) c = `${year[0]}${year[1]}`;
    else c = `${ +(year[0] + year[1]) + 1}`;
    if(+c > 9 && +c < 20) return c + 'th';
    return c + (c[1] === '1' ? 'st' : c[1] === '2' ? 'nd' : c[1] === '3' ? 'rd' : 'th');
}