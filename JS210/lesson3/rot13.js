// const LOWER_ALPHA_START = (char) => char >= 'a' && char <= 'm';
// const LOWER_ALPHA_END = (char) => char >= 'n' && char <= 'z';
// const UPPER_ALPHA_START = (char) => char >= 'A' && char <= 'M';
// const UPPER_ALPHA_END = (char) => char >= 'N' && char <= 'Z';

// function rot13(string) {
//   let newString = '';

//   for (let index = 0; index < string.length; ++index) {
//     let char = string[index];
//     let charCode = string.charCodeAt(index);

//     if (LOWER_ALPHA_START(char) || UPPER_ALPHA_START(char)) {
//       charCode += 13;
//       newString += String.fromCharCode(charCode);
//     } else if (UPPER_ALPHA_END(char) || LOWER_ALPHA_END(char)) {
//       charCode -= 13;
//       newString += String.fromCharCode(charCode);
//     } else {
//       newString += char;
//     }
//   }
//   return newString;
// }

const ALPHA_FIRST = (char) => char >= 'a' && char <= 'm';
const ALPHA_LAST = (char) => char >= 'n' && char <= 'z';

function rot13(string) {
  let newString = '';

  for (let index = 0; index < string.length; ++index) {
    let char = string[index];
    let charCode = string.charCodeAt(index);
    char = char.toLowerCase();

    if (ALPHA_FIRST(char)) {
      charCode += 13;
      newString += String.fromCharCode(charCode);
    } else if (ALPHA_LAST(char)) {
      charCode -= 13;
      newString += String.fromCharCode(charCode);
    } else {
      newString += char;
    }
  }
  
  return newString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13('Testing symbols and numbers stay: 13, ;, &, ^.'));