function findTargetInArray(array, target) {
    let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let val = array[mid];
    if (val === target) {
      return true;
    } else if (val < target) {
      left = mid + 1;
    } else if (val > target) {
      right = mid - 1;
    }
  }

  return false;
}

function findInNestedArray(matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let arr = matrix[mid];
    if (arr[0] <= target && arr.at(-1) >= target) {
      return findTargetInArray(arr, target);
    } else if (arr.at(-1) < target) {
      left = mid + 1;
    } else if (arr[0] > target) {
      right = mid - 1;
    }
  }

  return false;
}


console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.