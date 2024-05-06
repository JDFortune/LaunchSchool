function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let num1 of arr1) {
    for (let num2 of arr2) result.push(num1 * num2);
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]