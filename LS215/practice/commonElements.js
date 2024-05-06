function commonElements(arr1, arr2) {
  return [...new Set(arr1.filter(el => arr2.includes(el)))];
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // [1, 2, 4, 5]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // []