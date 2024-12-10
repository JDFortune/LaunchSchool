// function delayLog() {
//   for (let i = 1; i <= 10; i++) {
//     let logger = makeLogger(i);
//     setTimeout(logger, i * 1000);
//   }
// }

// function makeLogger(number) {
//   return function() {
//     console.log(number)
//   };
// }

// delayLog();

let number = 0;

let id = setInterval(() => {
  number++
  console.log(number)
}, 1000);


setTimeout(() => {
  clearInterval(id);
  console.log('Done!');
}, 11100);