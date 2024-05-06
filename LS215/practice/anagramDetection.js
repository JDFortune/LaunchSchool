/*

*/

function anagram(str1, str2) {
  return [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
}

console.log(anagram('Creative', 'Reactive')); // true
console.log(anagram("foefet", "toffee")); // true
console.log(anagram("Buckethead", "DeathCubeK")); // true
console.log(anagram("Twoo", "WooT")); // true
console.log(anagram("dumble", "bumble")); // false
console.log(anagram("ound", "round")); // false
console.log(anagram("apple", "pale")); // false