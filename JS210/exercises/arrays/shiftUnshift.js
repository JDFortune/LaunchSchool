function shift(arr) {
  let val;

  if (arr.length !== 0) {
    val = arr[0];
    for (let i = 0; i < arr.length; ++i) {
      arr[i] = arr[i + 1];
    }

    arr.length = arr.length - 1;
  }

  return val;
}

function unshift(arr, ...vals) {
  for (let index = vals.length - 1; index >= 0; --index) {
    for(let i = arr.length; i >= 0; --i) {
      arr[i] = arr[i - 1];
    } 
    arr[0] = vals[index]; 
  }

  return arr.length;
}

// function shift(array) {
//   let result;

//   if (array.length !== 0) {
//     result = array.splice(0, 1).pop();
//   }

//   return result;
// }

// function unshift(array, ...args) {
//   for (let i = 0; i < args.length; ++i) {
//     array.splice(i, 0, args[i]);
//   }

//   return array.length;
// }

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

let arr = [1, 2, 3];
console.log(unshift(arr, 5, 6));
// console.log(arr);        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]