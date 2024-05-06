function miniPeaks(arr) {
  let result = [];

  for (let i = 1; i < arr.length - 1; i ++) {
    let value = arr[i];
    if (value > arr[i - 1] && value > arr[i + 1]) {
      result.push(value);
    }
  }

  return result;
}

console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])); // [5, 9]
console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])); // [2, 3, 5]
console.log(miniPeaks([1, 2, 3, 4, 5, 6])); // []