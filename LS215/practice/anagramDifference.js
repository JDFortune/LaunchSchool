/*
  Given two words determine how many characters would need to be removed for them to be anagrams

*/

// function anagramDifference(str1, str2) {
//   str1 = [...str1].sort();
//   str2 = [...str2].sort();
//   let s1Counts = countChars(str1);
//   let s2Counts = countChars(str2);
//   let s1Keys = Object.keys(s1Counts);
//   let s2Keys = Object.keys(s2Counts).filter(key => !s1Keys.includes(key));
//   let counts = [];

//   s1Keys.forEach(key => {
//     counts.push(Math.abs(s1Counts[key] - (s2Counts[key] || 0)));
//   });

//   s2Keys.forEach(key => {
//     counts.push(s2Counts[key]);
//   });

//   return counts.length === 0 ? 0 : counts.reduce((total, num) => total + num);
// }

// function countChars(arr) {
//   let count = {};

//   arr.forEach(chr => {
//     count[chr] = count[chr] ? count[chr] + 1 : 1;
//   });

//   return count;
// }

function anagramDifference(str1, str2) {
  let str2Chars = [...str2];
  [...str1].forEach(char => str2 = str2.replace(char, ''));
  str2Chars.forEach(char => str1 = str1.replace(char, ''));

  return str1.length + str2.length;
}


console.log(anagramDifference('hello', 'jello')); // 2
console.log(anagramDifference('', '')); //== 0
console.log(anagramDifference('a', '')); //== 1
console.log(anagramDifference('', 'a')); //== 1
console.log(anagramDifference('ab', 'a')); //== 1
console.log(anagramDifference('ab', 'ba')); //== 0
console.log(anagramDifference('ab', 'cd')); //== 4
console.log(anagramDifference('aab', 'a')); //== 2
console.log(anagramDifference('a', 'aab')); //== 2
console.log(anagramDifference('codewars', 'hackerrank')); //== 10