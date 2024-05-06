// var hi = 'hello';

// if (true) {
//   var hi = 'goodbye';
// }

// console.log(hi);

function factorial(num) {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
}

console.log(factorial(3));