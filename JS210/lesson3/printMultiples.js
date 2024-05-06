// function logMultiples(number) {
//   let result =  [];
//   for (let i = 0; i <= 100; ++i) {
//     if (i % 2 === 1 && i % number === 0) result.unshift(i);
//   }
  
//   result.forEach(num => console.log(num));
// }

function logMultiples(number) {
  let candidate = Math.floor(100 / number) * number;
  
  while (candidate > 0) {
    if (candidate % 2 === 1) console.log(candidate);
    candidate -= number;
  }
}

logMultiples(17);

console.log('hello');
logMultiples(21);

