function peelLayerOff(arr) {
  return arr.slice(1, -1).map(el => el.slice(1, -1));
}

console.log(peelLayerOff([
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
])); /* [
  ["f", "g"],
  ["j", "k"]
] */

console.log(peelLayerOff([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35]
])); /* [
  [7, 8, 9],
  [12, 13, 14],
  [17, 18, 19],
  [22, 23, 24],
  [27, 28, 29]
] */

console.log(peelLayerOff([
  [true, false, true],
  [false, false, true],
  [true, true, true]
])); /* [[false]] */

console.log(peelLayerOff([
  ["hello", "world"],
  ["hello", "world"]
])); /* [] */