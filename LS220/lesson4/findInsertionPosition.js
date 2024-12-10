function findInsertPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(findInsertPosition([3, 5, 7, 9, 11], 9)); // 3
console.log(findInsertPosition([3, 5, 7, 9, 11], 2)); // 0
console.log(findInsertPosition([3, 5, 7, 9, 11], 12)); // 5