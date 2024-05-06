function findNumberForPrimeSum(sum) {
  let num = sum;
  while (!isPrime(num)) {
    num += 1;
  }

  return num - sum;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function minimumNumber(arr) {
  let sum = arr.reduce((total, num) => total + num);
  return isPrime(sum) ? 0 : findNumberForPrimeSum(sum)
}

console.log(minimumNumber([3,1,2])); // 1
console.log(minimumNumber([5,2])); // 0
console.log(minimumNumber([1,1,1])); // 0
console.log(minimumNumber([2,12,8,4,6])); // 5
console.log(minimumNumber([50,39,49,6,17,28])); // 2