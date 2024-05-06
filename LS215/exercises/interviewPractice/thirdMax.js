/*
Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Problem:
  get the largest three numbers of the array and return the 3rd largest. If there not 3 numbers, return the largest

  Questions:
    - Will the array ever be sparse?
    - Will it ever be empty?
    - Will the array contain negative numbers? How should handle them?
    - Will the array ever contain the multiple elements of the same number? If those numbers are the largest 3, should i add both of them to the largest or just one? Do I only need to consider unique elements?
    - Will the numbers always be integer numbers? Will they ever be string numbers or different number values other than whole numbers?
    - With the numbers ever be Infinity or NaN? How should handle them?
    - Will i always receive an array as an argument?
    - Will there ever be multiple arguments or no arguments?
  
Data:
 Input: array of integers
 Output: third largest number or largest number (if less than 3 largest)

Algorithm:
  guardclause: if array is empty, return 0;
  1. find the largest 3 unique elements
    sort the array by size descending order
      iterate through the array
        if the 3lrgest array is less than length 3
          push the current element into the array, if it is not already in the array
  2. return the 3rd largest (if less than 3 return largest)
      if the length of the array is 3
        return the last index
      else
        return the first index

*/

function thirdMax(arr) {
  if (arr.length === 0) return 0;

  arr.sort((a, b) => b - a);

  console.log(arr);
  let result = [];
  let idx = 0;

  while (idx < arr.length && result.length < 3) {
    let el = arr[idx];
    if (!result.includes(el) ) {
      result.push(el);
    }
    idx += 1;
  }

  if (result.length === 3) {
    return result.at(-1);
  } else {
    return result[0];
  }
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([3, 1, 1])); // 3
console.log(thirdMax([3, 4, 5, 1, -1, -5, -10])); // 3
console.log(thirdMax([3, 5, 5, 1, 4])); // 3
console.log(thirdMax([])); // 0