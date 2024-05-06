function reverseWords(string) {
  return string.split(' ').map(word => {
    return word.length >= 5 ? [...word].reverse().join('') : word;
  }).join(' ');
}

// function reverseWords(string) {
//   return string.replace(/\b\w{5,}\b/g, (word) => word.split('').reverse().join(''));
// }

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"