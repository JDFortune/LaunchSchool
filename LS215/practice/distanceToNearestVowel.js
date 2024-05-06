/*
  get the index locations for each vowel in an array of vowel index
  map over the array of characters tracking index
    return the mimum of maping the absolute difference of vowels for current index of char
*/

function distanceToNearestVowel(str) {
  let chars = [...str];
  let vowelIndexes = chars.map((char, idx) => /[aeiou]/.test(char) ? idx : -1 )
                          .filter(idx => idx >= 0);

  return chars.map((_, idx) => {
    return Math.min(...vowelIndexes.map(vI => Math.abs(idx - vI)))
  });
}

console.log(distanceToNearestVowel("aaaaa")); // [0, 0, 0, 0, 0]
console.log(distanceToNearestVowel("babbb")); // [1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("abcdabcd")); // [0, 1, 2, 1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("shopper")); // [2, 1, 0, 1, 1, 0, 1]