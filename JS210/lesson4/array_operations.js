function push(arr, ...val) {
  for (let x of val) {
    arr[arr.length] = x;
  }
  return arr.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3, 4, 5, 6));
// console.log(count);

// function pop(arr) {
//   if (Array.length === 0) return undefined;

//   let newLength = arr.length - 1;
//   let val = arr[newLength];
//   arr.length = newLength;
  
//   return val;
// }

// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(pop(arr));
// console.log(arr);

// function unshift(arr, ...value) {

//   for (let i = value.length - 1; i >= 0; --i) {
//     for (let index = arr.length; index > 0; --index) {
//       arr[index] = arr[index - 1];
//     }

//     arr[0] = value[i];
//   }
  
//   return arr.length;
// }

// let arr = [1, 2, 3, 4];
// console.log(unshift(arr, 'a', 'b', 'c'));
// console.log(arr);


// function shift(arr) {
//   let value = arr[0];

//   if (arr.length === 0) {
//     return undefined;
//   }

//   for (let index = 0; index < arr.length; ++index) {
//     arr[index] = arr[index + 1];
//   }

//   arr.length = arr.length - 1;

//   return value;
// }

// let arr = [1, 2, 3, 4];
// console.log(shift(arr));
// console.log(arr);
// console.log(shift([]));

// let arr = [1, 2, 3, 4, 3];

// function indexOf(arr, val, start = 0) {
//   for (let index = start; index < arr.length; ++index) {
//     if (arr[index] === val) return index;
//   }

//   return -1;
// }


// console.log(indexOf(arr, 3, 3));
// console.log(indexOf(arr, 0, 2));

// function lastIndexOf(arr, val, start = arr.length - 1) {
//   for (let index = start; index >= 0; --index) {
//     if (arr[index] === val) return index;
//   }

//   return -1;
// }

// console.log(lastIndexOf([1, 2, 3, 3, 5], 3, 4));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));        // -1

// function slice(arr, start, end) {
//   let result = [];
//   let count = 0;

//   while (start < end) {
//     result[count] = arr[start];
//     count += 1;
//     start += 1;
//   }

//   return result;
// }

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// function splice(arr, start, length) {
//   let result = [];
//   let count = 0;

//   while (count < length) {
//     result.push(arr[start]);
//     for (let index = start; index < arr.length; ++index) {
//       arr[index] = arr[index + 1];
//     }

//     arr.length = arr.length - 1;
//     count += 1;
//   }

//   return result;
// }


// function splice(array, begin, number) {
//   let removedValues = [];
//   for (let index = begin; index < array.length; index += 1) {
//     if (index < begin + number) {
//       push(removedValues, array[index]);
//     }

//     array[index] = array[index + number];
//   }

//   array.length = array.length - removedValues.length;
//   return removedValues;
// }

// let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// function concat(arr1, arr2) {
//   let result = []

//   for (let x of arr1) {
//     push(result, x);
//   }

//   for (let x of arr2) {
//     push(result, x);
//   }

//   return result;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(arr, delimiter) {
  let newString = '';

  for (let index = 0; index < arr.length; index += 1) {
    newString += String(arr[index]);
    if (index < arr.length - 1) newString += delimiter;
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'