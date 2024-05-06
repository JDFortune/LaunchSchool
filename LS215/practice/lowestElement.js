// Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

/*

Problem: Given an x,y coordinate for a nested array, find and return the lowest element value surrounding the x, y coordinate given.

Questions:
  1. Will we always be givn 3 arguments or could we be given more or less arguments? What do we do with no arguments? What do we do with extra arguments?
  3. What should we do if the first argument is ommitted or either or both of the x andy coordinate arguments?
  Will the x and y coordinates always be positive integers greater than or equal to zero.
  2. Will the argument always be an array?
  3. WIll it always contain nested arrays?
  3. Wil the nested arrays alwys contain integers (or whole numbers (possitive negative or 0?))
  4. Will any numbers ever be equal in value?
  5. WIll the arrays ever be sparse? How should we handle them?
  6. WIll the coordinates always be valid indexes? What should we do if they aren't? 

Data
 Input: array matrix (nested array of integers), 2 integers (x and y coordinate of the array)
 Output: the lowest number from the index position element and its neighbors

Algorithm:
  1 map out the indexes from 1 less than the x and y positions given, to one more and retrieve and return the lowest value captured.

  1. create a new array that contains a list of the elemenent and all of its neighbors. return the lowest value.

declare a result array
iterate from -1 to 1 (idx1)
  iterate from -1 to 1 (idx2)
    if x + idx1 is notundefined
      if [x + idx1][y + idx2] is not undefined
        push into the result array the element at index (x + idx1), y + idx2

return the lowest value captured
*/

function lowestElement(arr, x, y) {
  let result = [];

  for (let idx1 = Math.max(x - 1, 0); idx1 <= Math.min(x + 1, arr.length - 1); idx1++) {
    for (let idx2 = Math.max(y - 1, 0); idx2 <= Math.min(y + 1, arr.length - 1); idx2++) {
        result.push(arr[idx1][idx2]);
    }
  }

  return Math.min(...result);
}

console.log(lowestElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0)); // 1
console.log(lowestElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1, 1)); // 1
console.log(lowestElement([[1, 2, 3, 4], [4, 5, 6, 5], [7, 8, 9, 6], [-1, 2, 3, 4]], 2, 1)); // -1