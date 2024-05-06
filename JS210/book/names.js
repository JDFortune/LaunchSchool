// let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
// let upperNames = [];
// let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);

// let read = require('readline-sync');

// let answer;

// do {
//   answer = read.question('Do you want to do taht again?');
// } while (answer === 'y');

// let index = 0;
// let names = ['John', 'Bill', 'Ted'];
// let name = '';
// let upNames = [];

// for (; upNames.length < names.length; upNames.push(name)) {
//   name = names[index].toUpperCase();
//   index += 1;
// }

// console.log(upNames);
// let index = 0
// for (; index < 10; index++) {
//   console.log(index);
// }

// console.log(index);

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

// for (let index = 0; index < names.length; ++index) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
// }

// console.log(upperNames);

// for (let index = 0; index < names.length; index++) {
//   if (names[index] === 'Naveed') {
//     continue;
//   }

//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
// }

// console.log(upperNames);

for (let index = 0; index < names.length; index++) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames);