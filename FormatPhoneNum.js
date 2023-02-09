// You need to write a function that will format a phone number by a template.

// Task
// You're given number and string.

// If there are more digits than needed, they should be ignored

// if there are less digits than needed, should return Invalid phone number

// Examples
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
// (79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
// (81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
// (8123706890, "+## ### ### ##-##") => "Invalid phone number"
// (911, "###") => "911"
// (112, "+ () -") => "+ () -"

function formatNumber(number, template) {
    let result = '';
    let count = 0;
    number = number.toString();
    
    if(template.split('').filter(e => e === '#').length > number.length) { 
      return 'Invalid phone number';
    }
    
    for(let i = 0; i < template.length; i++) {
      result += template[i] === '#' ? number[count++] : template[i];
    }
    return result;
}