/*
Questions:
Will the elements always be of the same data type? If not, how should we compare them?
Will there always be only one argument and wiil it be an array of elements? If not, what should we do?

Data:
input: array of elements of the same data type
output: the same array sorted

Algorithm:

sorted value to false;

while the sorted value is not true
  set sorted to true
  iterate over the indexs of elements up to second to last index
    if the first element is greater than the next element
      switch their positions
      set sorted to false
  
return the sorted array
*/

function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        sorted = false;
      }
    }
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([])); // []
console.log(bubbleSort([2, 3, 1])); // [1, 2, 3]
console.log(bubbleSort(['z', 'x', 'a', 'c', 'b'])); // ['a', 'b', 'c', 'x', 'z']

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]