// let a = prompt('Enter a number');

// if (a === '3') {
//   console.log('a is 3');
// } else if ( a === '4') {
//   console.log('a is 4');
// } else {
//   console.log('a is neither 3, nor 4');
// }

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

 do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');