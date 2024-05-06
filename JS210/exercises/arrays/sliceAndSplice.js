function slice(arr, begin, end) {
  let newArr = [];

  begin = begin > arr.length ? arr.length : begin;
  end = end > arr.length ? arr.length : end;

  for (; begin < end; ++begin) {
    newArr.push(arr[begin]);
  }

  return newArr;
}

/* splice function changes the contents of an array, deleting existing elements and/or adding new elements
Takes arguments `array`, `start`, `deleteCount`, and zero or more `elements` to be added.
Function removes `deleteCount` number of elements from the array, beginning at the `start` index. If any optional element arguments are provided,
`splice` insets them into the array beginning at the `start` index. The function returns a new array containing the deleted elements, or an empty array (`[]`) if no elements are deleted. `splice` mutates the array.

Problem: Create a function that takes the array, a start index, number of elements to delete from the array (beginning at the start index), and zero or more elements to add into the array from the start index. Delete the number of elements from the array from the start (if any) and add them to a new array. Then insert elements into the array from the start position for the supplied elements.

Input: array, startIndex, deleteCount, elements
Output: array of deleted elements from original array

Type: mutating (on the original array)

Notes:
  - `start` and `deleteCount` will always integers greater than or equal to `0`
  - If the value of start is greater than the length of the array, the start is set to the array length.
  - If the delete count is greater than the number of elements from `start` to end of array, set it to the difference of the array length and `start` 
  - Takes optional arguments `elements` denoted with the rest parameter `...` followed by the parameter name. (like the rest of)
  - If no elements are provided, `splice` only removed elements.

Algorithm:
- create an empty result array
- set start to array length if it is greater than array length
- set deletCount to  difference between start and array length if it's greather than the difference
- push elements of array from start into result
    set index to start
    while index is less than deleteCount more than start
      push element into result from array (at index)
      increment index
- add elements to new array from start (increment start)
    iterate through elements
      set index to array length
      while index is greater than start
        set array index element to previous array index element
        decrement index
      set array at `start` index to element
      increment start
- remove number of deleteCount elements from array from start
    set count to 0
    while count is less than deleteCount
      set index to start
      while index is less than array length
        set array element at index to next array element
        increment index by 1
      decrement array length
      increment count
- return result array
*/

function splice(array, start, deleteCount, ...elements) {
  let result = []

  start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  for (let index = start; index < start + deleteCount; index += 1) {
    result.push(array[index])
  }

  elements.forEach(element => {
    for (let index = array.length; index > start; index -= 1) {
      array[index] = array[index - 1];
    }
    array[start] = element;
    start += 1;
  });

  let count = 0;
  while (count < deleteCount) {
    for (let index = start; index < array.length; index += 1) {
      array[index] = array[index + 1];
    }

    array.length = array.length - 1;
    count += 1;
  }

  return result;
}
console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]