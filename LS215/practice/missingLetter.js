function findMissingLetter(letters) {
  letters = letters.join('');
  for (let i = 1; i < letters.length; i++) {
    let charCode = letters.charCodeAt(i);
    if (letters.charCodeAt(i - 1) !== charCode  - 1) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return '';
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));