function countChars(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }

  return counts;
}

function duplicateEncode(str) {
  str = str.toLowerCase();
  let counts = countChars(str);

  return [...str].map(chr => counts[chr] > 1 ? ')' : '(').join('');
}

console.log(duplicateEncode("din")); "((("
console.log(duplicateEncode("recede")); "()()()"
console.log(duplicateEncode("Success")); ")())())"
console.log(duplicateEncode("(( @")); "))(("