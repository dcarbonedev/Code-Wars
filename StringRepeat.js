// String repeat

// Write a function called repeatStr which repeats the given string string exactly n 
// times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    result = '';
    for(let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}