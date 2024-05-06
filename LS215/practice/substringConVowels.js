/*
Write two functions:

    One to retrieve all unique substrings that start and end with a vowel.
    One to retrieve all unique substrings that start and end with a consonant.

The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).
Examples



Notes

    Remember the output array should have unique values.
    The word itself counts as a potential substring.
    Exclude the empty string when outputting the array.

Get all possible substrings
filter out any that don't meet the beginning and end criteria
filter out duplicates.
*/

// function getSubstrings(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let length = 1; length <= str.length - i; length++) {
//       result.push(str.substr(i, length));
//     }
//   }
  
//   return result;
// }

// function isStartEndVowels(str) {
//   return /[aeiou]/.test(str[0]) && /[aeiou]/.test(str[str.length - 1]);
// }

// function isStartEndConsonants(str) {
//   return /[^aeiou]/.test(str[0]) && /[^aeiou]/.test(str[str.length - 1]);
// }

// function getVowelSubstrings(str) {
//   let subs = getSubstrings(str);
//   return [...new Set(subs)].filter(sub => isStartEndVowels(sub)).sort();
// }

// function getConsonantSubstrings(str) {
//   let subs = getSubstrings(str);
//   return [...new Set(subs)].filter(sub => isStartEndConsonants(sub)).sort();
// }

const f = R => s => {
  A = []
  I = [...s.replace(R,1)].flatMap((c,i) => +c ? [] : [i])
  console.log(I);
  for (i of I) for (j of I) if (i <= j) A.push(s.slice(i,j+1))
  return [...new Set(A)].sort()
}

const getVowelSubstrings = f(/[^aeiou]/g)
const getConsonantSubstrings = f(/[aeiou]/g)

console.log(getVowelSubstrings("apple"));//["a", "apple", "e"]
console.log(getVowelSubstrings("hmm"));//[]
console.log(getConsonantSubstrings("aviation"));//["n", "t", "tion", "v", "viat", "viation"]
console.log(getConsonantSubstrings("motor"));//["m", "mot", "motor", "r", "t", "tor"]