// You will be given an array of numbers. You have to sort the odd numbers in 
// ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])


// O(n^2) solution
function sortOdd(arr) {
    let odds = arr.filter(n => n % 2).sort((a,b) => a-b);

    // map and shift are both O(n) time so this results in a
    // "nested loop" making it O(n^2)
    return arr.map(n => n % 2 ? odds.shift() : n);
}

// O(n) solution
function sortOdd(arr) {
    // we sort the odd numbers in descending order this time so we
    // can use pop() instead of shift (pop() is O(1) where shift() is O(n))
    let odds = arr.filter(n => n % 2).sort((a,b) => b-a);

    // map is O(n), pop is O(1) making this O(n)
    return arr.map(n => n % 2 ? odds.pop() : n);
}

// another O(n) solution
function sortOdd(arr) {
    let odds = arr.filter(n => n % 2).sort((a,b) => a-b);
    let oddCount = 0;
    return arr.map(n => n % 2 ? odds[oddCount++] : n);
}