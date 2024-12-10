function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

let num = factorial(5);

console.log(num);