// function swapCase(string){
//   let newString = ''

//   for(let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if (/[a-z]/.test(char)) {
//       newString += char.toUpperCase();
//     } else if (/[A-Z]/.test(char)) {
//       newString += char.toLowerCase();
//     } else {
//       newString += char;
//     }
//   }

//   console.log(newString);
//   return newString;
// }

function swapCase(string) {
  return string.replace(/([A-Z]*)([a-z]*)/g, (_, upper, lower) => {
    return upper.toLowerCase() + lower.toUpperCase();
  });
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"