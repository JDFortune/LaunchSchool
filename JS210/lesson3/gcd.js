// function gcd(a, b) {
//   let min = a > b ? b : a;
//   let greatest = 1;

//   for (let divisor = 2; divisor <= min; ++divisor) {
//     if (a % divisor === 0 && b % divisor === 0) {
//       greatest = divisor;
//     }
//   }
//   return greatest;
// }

// function gcd(a, b) {
//   if (a === b) {
//     console.log(`a is ${a} b is ${b}`);
//     let greatest = a;
//     console.log(`Greatest Common Denominator is ${greatest}`)
//     return greatest;
//   } else {
//     let min = Math.min(a, b);
//     console.log(min);
//     let max = Math.max(a, b);
//     console.log(max);
    
//     gcd(max - min, min);
//   }

  
// }

function gcd(a, b) {
  let greater = Math.max(a, b);
  let lesser = Math.min(a, b);
  let temp;

  while (lesser !== 0) {
    temp = lesser;
    lesser = greater % lesser;
    greater = temp;
  }

  return greater;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(4, 12));

// 9, 2
// 2 , 1
// 1, 0