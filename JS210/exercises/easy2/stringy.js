// function stringy(num) {
//   let state = true;
//   let string = '';
//   for (let index = 0; index < num; ++index) {
//     string += state ? '1' : '0';
//     state = !state;
//   }

//   return string;
// }

function stringy(num) {
  let string = '';

  for (let index = 1; index <= num; ++index) {
    string += index % 2;
  }

  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"