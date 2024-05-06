function halvsies(arr) {
  let result = []
  let mid = Math.ceil(arr.length / 2);
  result.push(arr.slice(0, mid), arr.slice(mid));
  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]