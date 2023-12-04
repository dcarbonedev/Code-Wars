// Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

// Try not to use built-in Date/Time libraries.

// Examples
// "07:05:45PM"  -->  "19:05:45"
// "12:00:01AM"  -->  "00:00:01"
// "11:46:47PM"  -->  "23:46:47"

var getMilitaryTime = function(input) {
  if(input.slice(0,2) === '12') {
    return input.slice(-2) === 'AM' ? '00' + input.slice(2, -2) : input.slice(0, -2);
  }
  return input.slice(-2) === 'PM' ? String(+input.slice(0, 2) + 12) + input.slice(2, -2) : input.slice(0, -2);
}