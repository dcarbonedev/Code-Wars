// N-th Fibonacci

// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// // For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
    let cur = 1;
    let prev = 0;
    let fibo = 0;
    for(let i = 2; i < n; i++) {
      fibo = prev + cur;
      prev = cur;
      cur = fibo;
    }
    return n === 2 ? 1 : fibo;
}