// let lastInArray = arr => arr[arr.length - 1];

// function rollCall(arr) {
//   for (let name of arr) {
//     console.log(name);
//   }
// }

// rollCall(['JD', 'Betty', 'Brook', 'Jensen', 'Grant', 'Sierra']);


// function reverseArray(arr) {
//   let result = [];
//   for (let index = arr.length - 1; index >= 0; --index) {
//    result.push(arr[index]);
//   }

//   return result;
// }

// console.log([1, 2, 3, 4].reverse());

// console.log(reverseArray([1, 2, 3, 4]));

function joinElements(arr) {
  let result = '';

  for (let index = 0; index < arr.length; ++index) {
    result += String(arr[index]);
  }

  return result;
}

console.log(joinElements([1, 'a', 'hello', 15]));