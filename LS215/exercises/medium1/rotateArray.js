/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

Questions:
1. Will we always be given a an argument? Not necessarily. If not an array, return undefined
2. Will we ever be given more than one argument? If so, what should we do with the extra arguments?

Rules:
  1. Don't mutate the orginal array
  2. Move the first index element to the end of the result array
  3. Return an emtpy array if the array is empty
  4. return undefined if argument is not an array

Data:
 Input: a non-empty array
 Output: a new array with first index element rotated to the end

Algorithm:
  - using a copy of the array, remove the first element and push it to the end of the array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]