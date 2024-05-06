/*
Iterate over a string and find the first character that recurrs in the string. Return an object with the key as the character and the first and second ocurrence indexes as an array for the value

Implicit:
  - If the string is empty or the argument is null, return an empty object.

Algortithm
 - iterate over the string and capture letters, in an object as keys with values set to true;
 - while iterating, if a key already exists in the capture object
    return a new object with that letter as the key and value as an array with the first occurence index and current index

*/

// function recurIndex(string) {
//   if (typeof string !== 'string' || string.length === 0) return {};
//   let captured = {};

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if (captured[char]) {
//       return {[char]: [string.indexOf(char), i]};
//     } else {
//       captured[char] = true;
//     }
//   }

//   return {};
// }

function recurIndex(str) {
  for (const [i, char] of [...(str || '')].entries()) {
    const j = str.indexOf(char);
    if (j < i) return {[char]: [j, i]};
  }
  return {};
}
console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
console.log(recurIndex("")); // {}
console.log(recurIndex(null)); // {}