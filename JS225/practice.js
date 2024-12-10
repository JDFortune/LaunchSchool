function lowestElement(arr, x, y) {
  let adjacentValues = [];

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let row = arr[x + i];
      if (!row) continue;
      let value = row[y + j];
      if (value) adjacentValues.push(value);
    }
  }

  return Math.min(...adjacentValues);
}

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1)); /*1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]*/

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)); /*-1


[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]*/