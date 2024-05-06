function transpose(matrix) {
  return matrix.map((row, colIdx) => row.map((_, rowIdx) => matrix[rowIdx][colIdx]));
}

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// the length of the outer array becomes the length of the nested arrays
// the length of the nested arrays becomes the length of the outer array.
// iterate through the nested array (idx becomes the)
//   iterate through the nested array
//     the idx dtermines which nested array element we push to in the return array._

function transpose(matrix) {
  return matrix[0].map((_, rowIdx) => matrix.map((el) => el[rowIdx]));
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]