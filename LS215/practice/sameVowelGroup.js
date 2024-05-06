/* 
Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
Examples

sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

Notes

    Words will contain only lowercase letters, and may contain whitespaces.
    Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

PEDAC

- Using the vowels from the first word and returning an array of the first word and all other words that contain only the same vowels as the first word

Algorithm:
- create a reference array of vowels
- Get an array of the vowels contained in the first word (match)
- filter out any vowels from the array of vowels included in the first word (anit vowel array)
- check that array against all other words to ensure that include only those vowels and no others
  - map over the array of words and filter to only words that include the array of vowels and don't include any of the array of anti-vowels
- return a new filtered array of words.
*/

// function sameVowelGroup(words) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];
//   let matchVowels = [... new Set(words[0].match(/[aeiou]/g))];
//   let antiVowels = VOWELS.filter(vowel => !matchVowels.includes(vowel));
  
//   return words.filter(word => {
//    return matchVowels.every(vowel => word.includes(vowel)) &&
//           !antiVowels.some(vowel => word.includes(vowel));
//   });
// }
function sameVowelGroup(w) {
  var keys =  w[0].match(/[aouie]/gi).sort().join('') || [];
  return w.filter((word) => word.match(/[aouie]/gi).every((letter) => keys.indexOf(letter) != -1))
}

console.log(sameVowelGroup(['happy', 'slap', 'sloan', 'sloth'])); // ['happy', 'slap']
console.log(sameVowelGroup(['goes', 'roe', 'hope', 'pool', 'groovie', 'groove'])); // ['goes', 'roe', 'hope', 'groove']
console.log(sameVowelGroup(["toe", "ocelot", "maniac", 'mo']));// ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));// ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));// ["hoops", "bot", "bottom"]
