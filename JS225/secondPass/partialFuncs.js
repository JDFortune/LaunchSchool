// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(sub) {
//   return function(num) {
//     return subtract(num, sub)
//   }
// }

// const sub4 = makeSubN(4);
// const sub7 = makeSubN(7);

// console.log(sub4(10)); // 6
// console.log(sub4(20)); // 16
// console.log(sub7(10)); // 3
// console.log(sub7(20)); // 13
 

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50