/*
Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.
Examples
*/

function puzzlePieces(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return [...new Set(arr1.map(((num, idx) => num + arr2[idx])))].length === 1;
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); //) true
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); //) true
console.log(puzzlePieces([1, 2], [-1, -1])); //) false
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); //) false
