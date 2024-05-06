const integerLength = (int) => String(int).length;
const lastNthElement = (arr, LastIdx) => arr[arr.length - LastIdx];

function findFibonacciIndexByLength(num) {
  let fibs = [1n, 1n];

  while (integerLength(lastNthElement(fibs, 1)) < num) {
    fibs.push(lastNthElement(fibs, 1) + lastNthElement(fibs, 2));
  }
  
  return BigInt(fibs.length);
}

// function findFibonacciIndexByLength(num) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;

//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < num)

//   return count;
// }

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
