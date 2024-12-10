function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().catch(err => {
      if (attempts < 2) {
        attempts += 1;
        console.log(`Retry attempt ${attempts}`);
        return attempt();
      } else {
        throw err
      }
    });
  }

  return attempt().catch((err) => console.log('Operation Failed', err));
}

retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.75
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);