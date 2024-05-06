/*
Count letters in string
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key
and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal

Questions:
  - Will we alwways be given a string as an argument?
  - Will we ever be given more than 1 argument or no arguments? What should we do in this case?
  - With the string characters always be lowercase? If not, should the count be case sensitive?
  - Will the string ever contain non-alphabetic characters?
  - Will the string ever be empty? If so, return an empty hash?
  - Does the hash need the keys sorted in any way?


Requirements:
  Explicits:
    - return a hash of the counts of letter, letter as keys
    - keys are characters
    - values are the character counts
  Implicits: 
    - characters will be lowercased

Algorithm:
 1. Convert string to array of chars
 2. declare a result obj
 3. iterate over character and count occurences by increments the value of the count object key
    - if key exists increment
      else set key to value 1
*/

// function letterCount([...chars]) {
//   let counts = {};
//   chars.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
//   return counts;
// }

// console.log(letterCount('codewars')); // {c: 1, o: 1, d:1, e:1, w:1, a: 1, r: 1, s: 1}
// console.log(letterCount('happy')); // {h: 1, a: 1, p: 2, y: 1}
// console.log(letterCount('')); // {}
function countElements(arr) {
  let counts = {};
  arr.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  return counts;
}

function pairs(arr) {
  if (arr.length === 0) return 0;
  let counts = Object.values(countElements(arr));
  return counts.map(count => Math.floor(count / 2)).reduce((total, count) => {
    return total + count;
  }); 
}

console.log(pairs([1, 2, 5, 6, 5, 2])); // == 2);
console.log(pairs([1, 2, 2, 20, 6, 20, 2, 6, 2])); // == 4);
console.log(pairs([0, 0, 0, 0, 0, 0, 0])); // == 3);
console.log(pairs([1000, 1000])); // == 1);
console.log(pairs([])); // == 0);
console.log(pairs([54])); // == 0);
