function partition(arr, low = 0, high = arr.length - 1) {
  const pivot = arr[low];
  let left = low + 1;
  let right = high;

  while (true) {
    while (left <= right && arr[left] < pivot) left++;
    while (left <= right && arr[right] >= pivot) right--;
    if (left > right) break;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  [arr[low], arr[right]] = [arr[right], arr[low]];
  return right;
}

function quicksort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

const arr = [7, 3, 9, 8, 5, 1];
quicksort(arr);
console.log(arr);