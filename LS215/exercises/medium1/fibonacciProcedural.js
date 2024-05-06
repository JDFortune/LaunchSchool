function fibonacci(n) {
  let count = 2;
  let num1 = 1;
  let num2 = 1;

  while (count < n) {
    [num1, num2] = [num2, num1 + num2];
    count += 1;
  }

  return num2;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050