function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let swapped = false;

    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr.at(j + 1), arr.at(j)];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

let arr = [1, 2 ,5, 6, 3, 3, 7, 9, 1, 2];

console.log(arr);

bubbleSort(arr);

console.log(arr);