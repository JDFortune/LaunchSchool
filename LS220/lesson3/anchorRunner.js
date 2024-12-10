function moveZeroes(arr) {
  let anchor = 0;
  let runner = 0;

  while (runner < arr.length) {
    if (arr[runner] !== 0) {
      [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
      anchor++;
    }

    runner ++;
  }

  return arr;
}

let arr = [0, 2, 0, 4, 8];

console.log(arr);
moveZeroes(arr);
console.log(arr);
