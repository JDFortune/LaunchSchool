// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(function (arr) {
//   arr.forEach(function (num) {
//     if (num % 2 === 0) console.log(num);
//   });
// });

// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// let evenOrOdd = myArray.map((num) => (num % 2 === 0) ? 'even' : 'odd');


// console.log(evenOrOdd);

// function findIntegers(arr) {
//   return arr.filter(function(num) {
//     return Number.isInteger(num);
//   });
// }

// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   return arr.map((str) => str.length)
//             .filter((num) => num % 2 === 1);
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// let array = [3, 5, 7];

// function sumOfSquares(arr) {
//   return arr.reduce((acc, num) => acc + num ** 2, 0);
// }
// console.log(sumOfSquares(array)); // => 83

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function filterStringLengths(acc, str) {
//   let length = str.length;
//   if (length % 2 === 1) acc.push(length);
//   return acc;
// }

// function oddLengths(arr) {
//   return arr.reduce((acc, str) => filterStringLengths(acc, str), []);
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers3.includes(3));

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// arr[1][3] = 606;

// console.log(arr);

let array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
let array2 = array1;

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);