/*
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.


Problem:
Find the nth unique string within an array and return it (or an empty string if nth is larger than the number of unique strings).
Questions:
  - Can we always expect two inputs? First Array? Second Integer? If not, how should we handle missing arguments? If the arguments are out of other, how should we them? If we are given aditional arguments, what should we do with the extra arguments?
  - Will the array every be empty or sparse? If so, what should we do with an empty array? What should do with empty indexes?
  - Will the datatype of elements in the array always be strings? IF not, should we convert other data types to strings? Will the strings always be one character in length?
  - Will the second argument always be 0.
  - 
  - Is string case important?

Data Types
  Input: array of characters, psotive integer
  Output: the string for kth unique element of the array

Rules:
  - Return the kth unique element
      (find unique elements)
  - Return empty string if empty array or k is larger than uniqe elements

Algorithm:
  return an empty string if array is empty or k is larger than array length
  get unique elements
    element is unique if its the index of it's first occurence is the same as it's last occurence
    push unique elements into a new array
  use array to return the kth unique element (k - 1 for index position)
  return value or '' if value is undefined
*/

function distinctString(arr, k) {
  if (arr.length === 0 || arr.length < k) {
    return '';
  }

  let uniques = []

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!uniques.includes(char) && arr.indexOf(char) === arr.lastIndexOf(char)) {
      uniques.push(char);
    }
  }

  let value = uniques[k - 1];
  return value ? value : '';
}
// retun empty strings if the array is empty or k is larger that unique count
console.log(distinctString([], 9 )); // ''
console.log(distinctString(['a', 'b', 'c'], 4)); // ''
console.log(distinctString(['a', 'b', 'a', 'c'], 3)); // ''
// happy path
console.log(distinctString(['a', 'b', 'a', 'c'], 2)); //'c'
console.log(distinctString(['a', 'b', 'a', 'c'], 1)); // 'b'
