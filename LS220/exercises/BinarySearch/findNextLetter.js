function findNextLetter(chars, key) {
  let left = 0;
  let right = chars.length - 1;
  let result = chars[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (chars[mid] > key) {
      result = chars[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.