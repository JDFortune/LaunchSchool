function trim(string) {
  let stringStart = 0;
  let stringEnd = string.length - 1;
  let newString = '';

  while (string[stringStart] === ' ') stringStart += 1;

  while (string[stringEnd] === ' ') stringEnd -= 1;

  while (stringStart <= stringEnd) {
    newString += string[stringStart];
    stringStart += 1;
  }

  console.log(`'${newString}'`);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

// function trimRight(string) {
//   let newString = '';
//   let copyMode = false;

//   for (let index = string.length - 1; index >= 0; index -= 1) {
//     if (string[index] !== ' ') {
//       copyMode = true;
//     }

//     if (copyMode) {
//       newString = string[index] + newString;
//     }
//   }

//   return newString;
// }