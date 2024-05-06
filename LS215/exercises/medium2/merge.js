/*
  build a new array from two given arrays that contains all of the elements, sorted in ascending order.
  don't mutate the input arrays
  don't use any sorting method on the result array. Place the elements in the new array in order, one at a time
  the arrays provided are already sorted 

use indexes to track the current position while iterating through each array.
compare the two elements at each index and input the smaller value into the new array then incremenet that arrays index
*/

function merge(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  let result = [];
  let length = arr1.length + arr2.length;
  
  while (result.length < length) {
    arr1El = arr1[idx1];
    arr2El = arr2[idx2];

    if (arr1El <= arr2El || idx2 >= arr2.length) {
      result.push(arr1El);
      idx1 += 1;
    } else if (arr1El > arr2El || idx1 >= arr1.length) {
      result.push(arr2El);
      idx2 += 1;
    }
  }

  console.log(result);
  return result;
}

// function merge(array1, array2) {
//   const copy1 = array1.slice();
//   const copy2 = array2.slice();
//   const result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//   }

//   return result.concat(copy1.length === 0 ? copy2 : copy1);
// }

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]


console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]