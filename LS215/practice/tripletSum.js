/*
Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.
Examples

tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
// Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5

tripletSum([5, 2, 8], n = 2) ➞ 0

Notes

You should also expect lists with less than three elements.
*/

// function getSubs(arr, n) {
//   let subs = [];

//   for (let idx1 = 0; idx1 < arr.length - 2; idx1++) {
//     for (let idx2 = idx1 + 1; idx2 < arr.length - 1; idx2++) {
//       for (let idx3 = idx2 + 1; idx3 < arr.length; idx3++) {
//         if (arr[idx1] + arr[idx2] + arr[idx3] === n) {
//           subs.push([arr[idx1], arr[idx2], arr[idx3]]);
//         }
//       }
//     }
//   }

//   return subs;
// }

// function tripletSum(arr, n) {
//   let subs = getSubs(arr, n).map(arr => arr.sort((a, b) => a - b));
//   subs = new Set(subs.map(el => JSON.stringify(el)));
//   return Array.from(subs).map(el => eval(el)).length;
// }


function tripletSum(arr, n) {
  let result = [];

  for (let h = 0; h < arr.length - 2; h++) {
    for (let i = h + 1; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[h] + arr[i] + arr[j] === n) {
          result.push(JSON.stringify([arr[h], arr[i], arr[j]].sort((a, b) => a - b)));
        }
      }
    }
  }

  result = [...new Set(result)].map(el => eval(el));
  return result.length;
}

console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11)); // 2
console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20)); // 5
console.log(tripletSum([5, 2, 8], n = 2)); // 0
console.log(tripletSum([1, 2], n = 3))