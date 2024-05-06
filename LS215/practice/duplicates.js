/*
Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.
Examples

get counts of chars in string
iterate over values
  if value > 1
    increase count by value - 1;
*/

// function getCharCounts(str) {
//   let counts = {};
//   [...str].forEach(char => {
//     counts[char] = counts[char] ? counts[char] + 1: 1;
//   });

//   return counts;
// }

// function duplicates(str) {
//   let counts = getCharCounts(str);
//   let dups = 0;
//   Object.values(counts).forEach(count => {
//     if (count > 1) {
//       dups += (count - 1);
//     }
//   });

//   return dups;
// }

function duplicates(str) {
  let dups = 0;
  
  [...str].forEach((char, index) => {
    if (str.indexOf(char) !== index) {
      dups += 1;
    }
  });

  return dups;
}
console.log(duplicates("Hello World!")); // 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3
console.log(duplicates("foobar")); // 1
console.log(duplicates("helicopter")); // 1
console.log(duplicates("birthday")); // 0
// If there are no duplicates, return 0
