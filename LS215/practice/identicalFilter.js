function identicalFilter(arr) {
  return arr.filter(str => [...new Set([...str])].length === 1);
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])); // ["aaaaaa", "d", "eeee"]
console.log(identicalFilter(["88", "999", "22", "545", "133"])); // ["88", "999", "22"]
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])); // []