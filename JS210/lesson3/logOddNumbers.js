// function logOddNumbers(num) {
//   for (let i = 1; i <= num; ++i) {
//     if (i % 2 === 1) console.log(i);
//   }
// }

// function logOddNumbers(num) {
//   let i = 1;
//   while (i <= num) {
//     console.log(i);
//     i += 2;
//   }
// }

function logOddNumbers(num) {
  for (let i = 1; i <= num; ++i) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}

logOddNumbers(19);