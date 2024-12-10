// function populationCount(num) {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// }

function populationCount(number) {
  console.log(number);
  if (number > 0) populationCount(number - 1);
}

populationCount(10);