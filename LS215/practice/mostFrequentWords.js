/*
  scrub the string to an array of lowercased letters only
  count the occurences of the strings in the array
  return the top 3 recurring strings in descending order of count
*/

function top3Words(string) {
  if (!/[a-z]/.test(string)) {
    return [];
  }

  strings = scrubToStrings(string);
  let counts = countStrings(strings);
  let orderedStrings = stringOccurenceOrder(counts)

  return orderedStrings.slice(0, 3);
}

function scrubToStrings(string) {
  return string.split(/[. :, /]+/g)
               .filter(el => el !== '')
               .map(el => el.toLowerCase());
}

function stringOccurenceOrder(counts) {
  return Object.keys(counts)
  .sort((word1, word2) => {
    return counts[word2] - counts[word1];
  });
}

function countStrings(arr) {
  let counts = {};
  arr.forEach(str => counts[str] = counts[str] ? counts[str] + 1 : 1);
  return counts;
}

console.log(top3Words("a a a b c c d d d d e e e e e")); // ["e", "d", "a"]
console.log(top3Words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ["e", "ddd", "aa"]
console.log(top3Words(" //wont won't won't ")); // ["won't", "wont"]
console.log(top3Words(" , e .. ")); // ["e"]
console.log(top3Words(" ... ")); // []
console.log(top3Words(" ' ")); // []
console.log(top3Words(" ''' ")); // []
console.log(top3Words("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a  lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); // ["a", "of", "on"]
