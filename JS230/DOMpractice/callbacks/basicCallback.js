// function basicCallback(cb, num) {
//   setTimeout(() => cb(num), 2000);
// }

// basicCallback( num => console.log(num * 2), 2);

// function downloadFile(cb) {
//   console.log('Downloading File...');
//   setTimeout(() => {
//     cb('Download Complete!')
//   }, 1500);
// }

// function downloadFilePromise() {
//   return new Promise((resolve) => {
//     console.log("Downloading File...");
//     setTimeout(() => resolve("Download complete!"), 1500);
//   });
// }

// function downloadFilePromise() {
//   return new Promise((resolve, reject) => {
//     console.log('Downloading File...');
//     setTimeout(() => {
//       console.log('Download Complete!');
//       resolve();
//     }, 1500);
//   });
// }

// function processData(nums, cb) {
//   setTimeout(() => {
//     const processed = nums.map(cb);
//     console.log(processed)
//   }, 1000);
// }

// function processDataPromise(array) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processed = array.map(num => num * 2);
//       resolve(processed);
//     }, 1500);
//   });
// }

// function flakyService() {
//   return new Promise((resolve, reject) => {
//     let binary = Math.round(Math.random());
//     if (binary) {
//       resolve('Operation successful');
//     } else {
//       reject('Operation failed');
//     }
//   });
// }

// flakyService()
//   .then((str) => console.log('Success: ' + str))
//   .catch((str) => console.log('Failed: ' + str));

// processDataPromise([1, 2, 3]).then((processedNumbers) => console.log(processedNumbers));

// const double = (num) => num * 2;

// function waterfallOverCallbacks(callbacks, num) {
//   callbacks.forEach(cb => num = cb(num));
//   console.log(num);
// }

// waterfallOverCallbacks([double, double, double], 1);

// function startCounter(callback) {
//   let counter = 0;
//   const interval = setInterval(() => {
//     counter++;
//     if (callback(counter)) clearInterval(interval);
//   }, 1000)

// }

// // Example usage:
// startCounter((count) => {
//   console.log(count);
//   return count === 5;
// });
// // Logs 1, 2, 3, 4, 5, then stops

function operation() {
  return new Promise((resolve, reject) => {
    console.log('Operation started');
    setTimeout(() => {
      resolve('Operation complete');
    }, 1000)
  });
}

operation()
  .then(console.log)
  .finally(() => console.log('Cleaning up resources...'));