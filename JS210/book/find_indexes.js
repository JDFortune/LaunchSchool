function findArrayIndexes(arr, val) {
  let result = [];
  let index = 0;
  arr.forEach(function(el) {
    if (el === val) result.push(index);
    index += 1;
  })
  return result;
}

console.log(findArrayIndexes([1, 2, 3, 4, 1, 5, 9, 1], 1));