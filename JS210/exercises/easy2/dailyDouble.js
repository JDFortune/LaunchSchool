// function crunch(string) {
//   let newString = '';
//   let stringChars = string.split('');

//   for (let index = 0; index < string.length; ++index) {
//     if (newString[newString.length - 1] !== string[index]) {
//       newString += string[index];
//     }
//   }

//   return newString;
// }

function crunch(string) {
  if (string.length === 0) return string;

  let newString = '';

  let groupChars = string.match(/(\w)\1*/g);
  groupChars.forEach(str => newString += str[0]);

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                     // "a"
console.log(crunch(''));                           // ""
