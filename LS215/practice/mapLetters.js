function mapLetters(string) {
  let chars = [...string];
  let result = {};

  chars.forEach((char, idx) => {
    result[char] = result[char] ? result[char].concat([idx]) : [idx];
  });

  return result;
}

console.log(mapLetters("dodo")); // { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }