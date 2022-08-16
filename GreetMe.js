// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = n =>`Hello ${n[0].toUpperCase()}${n.toLowerCase().slice(1, n.length)}!`;