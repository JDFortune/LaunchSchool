function isMagicSquare(arr) {
  return [...new Set([...arr.flatMap((row, idx) => {
    return [
      sum(row),
      sum(arr.map(colRow => colRow[idx])),
    ]
  }),
  sum(arr.map((row, i) => row[i])),
  sum(arr.map((row, i) => row[arr.length - (i + 1)])),
  ])].length === 1;
}

function sum(arr) {
  return arr.reduce((total, num) => total + num);
}

console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
])); // true

console.log(isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
])); // true

console.log(isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
])); // false