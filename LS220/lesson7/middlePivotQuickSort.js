function partition(arr, low, high) {
  const pivotIndex =  Math.floor((low + high) / 2);
  const pivot = arr[pivotIndex];
  let left = low;
  let right = high;

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left > right) break;

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return left;
}

function quicksort(arr, low = 0, high = arr.length - 1) {
  const pivotIndex = partition(arr, low, high);

  if (low < pivotIndex - 1) {
    quicksort(arr, low, pivotIndex - 1);
  }
  if (pivotIndex < high) {
    quicksort(arr, pivotIndex, high);
  }
}

let arr = [1, 7, 4,9, 4, 3, 4, 2, 2, 9, 7, 7];
quicksort(arr);
console.log(arr);