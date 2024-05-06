// function factorial(num) {
//   let result = 1;
//   for (counter = num; counter > 0; counter -= 1) {
//     result *= counter;
//   }

//   console.log(result);
// }

function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(6));