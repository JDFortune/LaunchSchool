function isAllUnique(string) {
  string = string.replace(' ', '').toLowerCase();
  let usedChars = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    
    if (usedChars[char]) {
      return false;
    } else {
      usedChars[char] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true