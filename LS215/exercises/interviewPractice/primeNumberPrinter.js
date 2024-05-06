/*
Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Questions:
  - are we trying individual digits as separate numbers or can multiple digits together be seen as one number?
  - will the argument always be a string?
  - Will the string ever contain just numbers or no numbers?
  - WIll the strign ever contain other characters besides alphanumerics
  - WIll teh string ever be empty? if so, what should I do (return an empty array)
  - Will the number ever be negative? should I consider it's absolute value or just consider it to not be a prime number?
  - Will the string ever contain the words Infinity or NaN in the sequence?
  - Will the string ever contain 0 preceding a numbers (making it octal)? If so, how should I handle it?
  - Will we always receive precisely 1 argument? If not what should I do if the argument is ommited

Rule:
  - remove leading zeroes to numbers
  - combine consecutive digits to one number
  - could receive negative numbers (obviously they don't count as primes)

Data;
 input - string (alphanumeric)
 output - array of prime number integers;

Algorithm:
  parse the string to grab all string numbers
  transform any octals by removing leading zeroes and convert to number types
  *filter to remove anything thats not a prime
    (check that a number is print)
    - remove negative and non-prime numbers
  
  IsPrime
    - return false if the number is less than or equal to 2
    - iterate from 2 to the 1 less the number
      if any iterated number is evenly divisibleby the number
        return false
      return true
*/

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}


function primeNumberPrinter(str) {
  if (str === undefined || str.length === 0) return [];
  let strNums = str.match(/-?\d+/g);

  strNums = strNums.map(num => Number(num.replace(/^(0)(\d+)$/, '$2')));;
  strNums = strNums.filter(num => isPrime(num));

  return strNums;
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter('a-4c2k3')); // [2, 3]
console.log(primeNumberPrinter('')); // []
console.log(primeNumberPrinter('a03c13b2')); // [3, 13, 2]
console.log(primeNumberPrinter()); // []