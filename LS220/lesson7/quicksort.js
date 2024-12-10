function partition(arr) {
  const pivot = arr[0];
  let left = 1;
  let right = arr.length - 1;

  while (true) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] >= pivot) {
      right--;
    }

    if (left > right) {
      break;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  [arr[0], arr[right]] = [arr[right], arr[0]];
  return arr;
}

let arr = [5, 1, 3, 9, 4, 7, 8, 2];
partition(arr);
console.log(arr);