// function repeat(string, times) {
//   if (typeof times !== 'number' || times < 0) {
//     console.log(undefined);
//     return;
//   } else if (times === 0) {
//     console.log('');
//     return;
//   } else {
//     while (times > 1) {
//       string += string;
//       times -= 1;
//     }
//   }

//   console.log(string);
// }

const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) return undefined;

  let repeat = ''
  for (let count = 0; count < times; count += 1) repeat += string;

  return repeat;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined