/*
A collection of spelling blocks has two letters per block, as shown in this list:

[
  'B|O', 'X|K', 'D|Q', 'C|P', 'N|A',
'G|T', 'R|E', 'F|S', 'J|W', 'H|U',
'V|I', 'L|Y', 'Z|M',
]

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true


Questions:
1. Are we always going to be given argument? Or will we be given more than one argument? If no argument what do we do? If we're given additional arguments, how do we handle the extras.
2. Will the argument always be a string of alphabet characters? Or will other string characters?
3. Will the argument always be a string?
4. Will the string always be one word?

Data Structure:
Input: a String of characters
Output: Boolean true or false if the character complies with the spelling blocks

Rules:
  - A letter can only appear once
    - If a letter appears, it's counterpart cannot be in the string
  - The case is insensitive.

Algorthm:
  Use the spelling blocks as a reference that we can iterate over.
  For each reference test that the returned match will only contain 1 element or be null
    - if it ever returns a match with mor than one element, return false
  return true
*/
const SPELLBLOCKS = [
  'B|O', 'X|K', 'D|Q', 'C|P', 'N|A',
  'G|T', 'R|E', 'F|S', 'J|W', 'H|U',
  'V|I', 'L|Y', 'Z|M',
].map(el => new RegExp(el, 'gi'));

function isBlockWord(str) {
  for (let i = 0; i < SPELLBLOCKS.length; i++) {
    let matches = str.match(SPELLBLOCKS[i]);
    if (matches === null) {
      continue;
    } else if (matches.length > 1) {
      return false;
    }
  }

  return true;
}

// function isBlockWord(str) {
//   str = str.toLowerCase();
//   let first = 'bxdcngrfjhvlz';
//   let second = 'okqpateswuiym';
//   let used = []
//   let chars = [...str.toLowerCase()];

//   for (let i = 0; i < chars.length; i++) {
//     let letter = chars[i];
//     if (first.includes(letter)) {
//       let letterIdx = first.indexOf(letter);
//       if (used.includes(letter) || str.includes(second[letterIdx])) {
//         return false;
//       } else {
//         used.push(letter);
//       }
//     } else {
//       let letterIdx = second.indexOf(letter);
//       if (used.includes(letter) || str.includes(first[letterIdx])) {
//         return false;
//       } else {
//         used.push(letter);
//       }
//     }
//   }
    
//   return true;
// }

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
