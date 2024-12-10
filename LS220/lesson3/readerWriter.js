function moveZeroes(arr) {
  let writer = 0;
  let reader = 0;

  while (reader < arr.length) {
    if (arr[reader] !== 0) {
      arr[writer] = arr[reader];
      writer++;
    }

    reader++;
  }

  while (writer < arr.length) {
    arr[writer] = 0;
    arr++;
  }

  return arr;
}