/*
the number of columns becomes the number of rows

*/
// [ 1, 2, 3, 4]
// [ 5, 6, 7, 8]
// [ 9,10,11,12]
// [13,14,15,16]

// swap rowIdx and colIdx
// for colIdx (take value of rows highest index and subtract the current rowIdx) ex length 4 (greatest is 3) 3 - 3 (current index) becomes 0;

function rotate90(matrix) {
  let result = Array.from(Array(matrix[0].length), () => []);
  let rowTotalIdx = matrix.length - 1;
  
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
      result[colIdx][rowTotalIdx - rowIdx] = matrix[rowIdx][colIdx];
    }
  }

  return result;
}

function rotate90(matrix) {
  let result = matrix[0].map((row, rowIdx) => {
    matrix.map((el, colIdx) => matrix[colIdx][rowIdx])
  });
  
  result.forEach(row => row.reverse());
  return result;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]