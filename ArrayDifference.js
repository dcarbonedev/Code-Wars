// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function solve1(arr1, arr2) {
  // Function exits in O(1) time in these cases
  if(arr1.length === 0 || arr2.length === 0) return arr1;

  // O(n^2) time because if nested methods... could be improved (hashmap?)
  return arr1.filter(n => !arr2.includes(n));
}

