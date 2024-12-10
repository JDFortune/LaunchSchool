// Promise.resolve(7)
//   .then(result => result * 2)
//   .then(result => result + 5)
//   .then(result => console.log(result));

const promise = new Promise((resolve, reject) => {
  throw new Error("Oops!");
});

promise
  .then((result) => {
    // This will not run because of the error above
  })
  .catch((error) => {
    console.error("Caught an error: ", error.message);  
  });