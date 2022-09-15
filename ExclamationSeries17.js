// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left,right){
    let leftTotal = [...left].reduce((a,c) => c === '!' ? a + 2 : a + 3 ,0);
    let rightTotal = [...right].reduce((a,c) => c === '!' ? a + 2 : a + 3 ,0);
    return leftTotal === rightTotal ? 'Balance' : leftTotal > rightTotal ? 'Left' : 'Right';
}