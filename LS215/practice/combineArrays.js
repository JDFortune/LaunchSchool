/*
Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".

Problem: Transpose elements in multiple given arrays into nested arrays in a returned array based on the elements' index positions (0s go into first nested array, 1s go into second, etc.)\


Requirements:
  if the current array returns undefined
    replace that element with '*'
Data:
  Input, multiple arguments as arrays.
  Output: a single array of nested arrays, with elements from each given arguent array moved to the nested array associated with that elements index position

Algorithm:
  create a function that takes an arbitrary number of element and combines them into an array.
  map over the array, tracking index
    map over each nested array
      replacing the current index of the array with the element whose index in any array corresponds to the current idx of the outer map

*/

function combineArrays(...args) {
  let max = Math.max(...args.map(arr => arr.length));
  return [...Array(max).keys()].map(i => args.map(a => i < a.length ? a[i] : '*'));
}

  // let temp = [];
  // for (let i = 0; i < args.length; i ++) {
  //   for (let j = 0; j < nestedLengths; j++) {
  //     let val = args[j][i];
  //     temp.push(val === undefined ? '*' : val);
  //   }
  //   result.push(temp);
  //   temp = [];
  // }

  // return result;
// }

// function transpose(arr) {
//   let result = [];

// }


console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"])); // ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]
console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])); // ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]