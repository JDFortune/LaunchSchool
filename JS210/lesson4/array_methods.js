// function arraysEqual(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
//   if (arr1.length !== arr2.length) return false;

//   for (let x in arr1) {
//     if (arr1[x] !== arr2[x]) return false;
//   }
  
//   return true;
// }

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false

// function firstElementOf(arr) {
//   return arr[0];
// }

// function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }

// function nthElement(arr, index) {
//   return arr[index];
// }

// function firstNOf(arr, count) {
//   return arr.slice(0, count);
// }


// function lastNOf(arr, count) {
//   if (count > arr.length) count = arr.length;
//   return arr.slice(arr.length - count);
// }
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let newArr = lastNOf(arr, 15);

// // // newArr[0] = 'hi';
// // console.log(arr);
// // console.log(newArr);

// function endsOf(arr1, arr2) {
//   return new Array(arr1[0], arr2[arr2.length - 1]);
// }

// console.log(endsOf([1, 2, 3], [4, 5, 6, 7]));

// function oddElementsOf(arr) {
//   let result = [];
//   for (let x in arr) {
//     if (x % 2 === 1) result.push(arr[x]);
//   }
//   return result;
// }

// console.log(oddElementsOf([1, 2, 3, 4, 5, 6, 7, 8]));

// function mirroredArray(arr) {
//   return arr.concat(arr.slice().reverse());
// }

// console.log(mirroredArray([1, 2, 3]));

// function sortDescendingArr(arr) {
//   return arr.slice().sort((a, b) => b - a);
// }

// console.log(sortDescendingArr([4, 2, 6, 1, 5, 8, 3, 9, 7]));


// function matrixSums(arr) {
//   return arr.map(innerArr => innerArr.reduce((acc, val) => acc + val, 0));
// }

// function matrixSums(arr) {
//   let result = [];

//   for (let index = 0; index < arr.length; ++index) {
//     let innerArr = arr[index];
//     let sum = 0;
//     for (let i = 0; i < innerArr.length; ++i){
//       sum += innerArr[i];
//     }
//     result.push(sum);
//   }

//   return result;
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));

// function uniqueElements(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; ++i) {
//     let element = arr[i];
//     if (result.indexOf(element) === -1) result.push(element);
//   }

//   return result;
// }

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));

// function missing(arr) {
//   let missingElements = [];

//   for (let index = 0; index < arr.length; ++index) {
//     if (arr[index] !== arr[index + 1] -1 && arr[index + 1] !== undefined) {
//       let currentNum = arr[index] + 1;
//       while (currentNum < arr[index + 1]) {
//         missingElements.push(currentNum);
//         currentNum += 1;
//       }
//     }
//   }

//   return missingElements;
// }

function missing(arr) {
  let missingElements = [];
  let start = arr[0] + 1;
  let end = arr[arr.length - 1];

  for (let integer = start; integer < end; integer += 1) {
    if (arr.indexOf(integer) === -1) {
      missingElements.push(integer);
    }
  }

  return missingElements;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
