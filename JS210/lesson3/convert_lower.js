const CONVERSION_OFFSET = 32;

let toLowerCase = (string) => {
  let newString = '';

  for (let index = 0; index < string.length; ++index) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z'){
      charCode += CONVERSION_OFFSET;
    }
      
    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
console.log(toLowerCase('abc123DEF')); 