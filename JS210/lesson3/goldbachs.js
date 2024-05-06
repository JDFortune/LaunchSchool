// function getPrimes(num) {
//   let primes = []
//   let potential = 3;

//   while (potential < num) {
//     let prime = true;
//     for (let i = 2; i < potential; ++ i) {
//       if (potential % i === 0) prime = false;
//     }
//     if (prime) primes.push(potential);

//     potential += 1;
//   }
//   return primes;
// }

// function checkGoldbach(num) {
//   let primes = getPrimes(num)
//   let goldbachs = [];
//   primes.forEach(prime1 => {
//     primes.forEach(prime2 => {
//       if (prime1 + prime2 === num) {
//         goldbachs.forEach(gb =>{
//           // if (!gb.includes(prime1)) goldbachs.push([prime1, prime2])
//         });
//       }
//     })
//   });

//   goldbachs.forEach(gb => {
//     console.log(`${gb[0]} ${gb[1]}`);
//   })
// }

function isPrime(num) {
  if (num <= 1 || num > 2 && num % 2 == 0) return false;

  let divisor = 3;

  while (divisor < num) {
    if (num % divisor === 0) return false;

    divisor += 2;
  }

  return true;
}

// function checkGoldbach(expectedSum) {
//   let goldbachs = [];
//   for (let firstNumber = 2; firstNumber < expectedSum; firstNumber += 1){
//     for (let secondNumber = 2; secondNumber < expectedSum; secondNumber += 1) {
//       if (firstNumber + secondNumber === expectedSum && isPrime(firstNumber) && isPrime(secondNumber)) {
//         if (!goldbachs.includes(firstNumber)) {
//           goldbachs.push(firstNumber, secondNumber);
//         }
//       }
//     }
//   }
  
//   if (goldbachs.length === 0) {
//     console.log(null);
//   } else {
//     while (!(goldbachs.length === 0)) {
//       console.log(`${goldbachs.shift()} ${goldbachs.shift()}`);
//     }
//   }
// }

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1){
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;

    if (num1 + num2 === expectedSum) {
      if (isPrime(num1) && isPrime(num2)) {
        console.log(num1, num2);
      }
    }
  } while (num1 !== num2);
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53