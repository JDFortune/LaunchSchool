function isIntegerArray(arr) {
  return Array.isArray(arr) && arr.every(el => Math.floor(el) === el);
}

console.log(isIntegerArray([1, 5, 2.3]));
console.log(isIntegerArray([1, 2, 3, 4]));
console.log(isIntegerArray([1, 3.0, 2]));