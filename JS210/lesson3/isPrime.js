function isPrime(num) {
  if (num <= 1 || num > 2 && num % 2 == 0) return false;

  let divisor = 3;

  while (divisor < num) {
    if (num % divisor === 0) return false;

    divisor += 2;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false