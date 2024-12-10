function sum(arr) {
  if (arr.length <= 1) return arr[0] || 0;
  return arr.pop() + sum(arr);
}

console.log(sum([1,2,3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.