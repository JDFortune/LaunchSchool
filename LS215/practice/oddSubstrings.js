/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.
For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

Algorithm
- get all substrings
- filter to odd integer substrings only 
- return the length
*/

function getSubstrings(string) {
  let subs = [];

  for (let index = 0; index < string.length; index++) {
    for (let length = 1; length <= string.length - index; length++) {
      subs.push(string.substr(index, length));
    }
  }

  return subs;
}


function solve(string) {
  let substrings = getSubstrings(string);
  return substrings.filter(sub => Number(sub) % 2 === 1).length;
}

console.log(solve("1341") == 7);
console.log(solve("1357") == 10);
console.log(solve("13471") == 12);
console.log(solve("134721") == 13);
console.log(solve("1347231") == 20);
console.log(solve("13472315") == 28);