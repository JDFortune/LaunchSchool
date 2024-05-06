/* 
Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".

Question:
  size of array might not be evenly divisible by n
    + chunk the elements to n size where you can and have the remaining element be in a chunk < n size
  could the array be sparse -> what should we do?
  n could be greater than array size
   + return an array with the original array nested
  could n be a datatype other than integer greater than 0?
    + what should we do if n <= 0 -> return an empty array

Algorithm:
  guard clause return empty array if n is less than or equal to 0
  declare a return array []
  while original array is not empty
    push into return array the result of splicing the array from 0 to index represneted by n
  
  return the array

*/

function chunk(arr, n) {
  let result = [];
  if (n <= 0) return result;

  while (arr.length !== 0) result.push(arr.splice(0, n));

  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // [[1, 2, 3, 4, 5]];
console.log(chunk([1, 2, 3], 0)); // []

console.log(chunk([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunk([1, 2, 3, 4 ,5], 10)); // [[1, 2, 3, 4, 5]]