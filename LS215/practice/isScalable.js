function isScalable(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) > 5) return false;
  }
  return true;
}

console.log(isScalable([1, 2, 4, 6, 7, 8])); // true
console.log(isScalable([40, 45, 50, 45, 47, 52])); // true
console.log(isScalable([2, 9, 11, 10, 18, 21])); // false