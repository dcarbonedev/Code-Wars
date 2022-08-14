// Move 10

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
    let l = 'abcdefghijklmnopqrstuvwxyz';
    return [...s].map(e => l[(l.indexOf(e) + 10) % 26]).join('');
}