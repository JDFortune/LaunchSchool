// function average(arr) {
//   return sum(arr) / arr.length
// }

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length ; ++i) {
//     total += arr[i];
//   }
  
//   return total;
// }

// let temperatures = [32, 42, 27, 30, 37];

// console.log(average(temperatures));

// no other code above
function assign() {
  let country1 = 'Liechtenstein';
  country2 = 'Spain';
}

function say() {
  assign();
  console.log(country2);
}

say();
console.log(country2);   // logs: Spain
// console.log(country1);   // gets ReferenceError
// no other code below