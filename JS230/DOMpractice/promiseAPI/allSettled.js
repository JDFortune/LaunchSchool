function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

Promise.allSettled([flakyService(), flakyService(), flakyService()])
  .then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(
          `Service ${index + 1} succeeded with message: ${result.value}`
        );
      } else {
        console.error(
          `Service ${index + 1} failed with error: ${result.reason}`
        );
      }
    });
  });