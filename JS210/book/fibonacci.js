function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));
console.log(fibonacci(20));

// function count(num) {
//   if (num > 10) return num;
//   return count(num + 1) + count(num + 2);
// }

// console.log(count(9)); // 11 + 11 + 12
// console.log(count(10));