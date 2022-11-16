// Two Sum O(n) solutions

// 2 pass map/obj solution
// total time complexity O(n)
function solve1(arr, target) {
    let obj = {};
  
    // this step is O(n)
    for(let i = 0; i < arr.length; i++) {
      obj[arr[i]] = i;
    }
  
    // this step is O(n)
    for(let i = 0; i < arr.length; i++) {
      let compliment = target - arr[i];
      if(obj[compliment] != null) return [i, obj[compliment]];
    }
  
    return [];
}

// single pass map/obj solution
// total time complexity O(n)
function solve2(arr, target) {
  let obj = {};

  for(let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    if(obj[compliment] != null) { 
      return [obj[compliment], i];
    } else {
      obj[arr[i]] = i;
    }
  }
  return [];
}