function arrayDiff(arr1, arr2) {
  arr2.forEach(num => {
    while (arr1.indexOf(num) !== -1) {
      arr1.splice(arr1.indexOf(num), 1);
    }

  });

  return arr1;
}

console.log(arrayDiff([1,2], [1])); // [2]
console.log(arrayDiff([1,2,2], [1])); // [2,2]
console.log(arrayDiff([1,2,2], [2])); // [1]
console.log(arrayDiff([1,2,2], [])); // [1,2,2]
console.log(arrayDiff([], [1,2])); // []