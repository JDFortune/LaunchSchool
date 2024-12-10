function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data Loaded');
      } else {
        reject('Network error');
      }
    }, 1000)
    
  }).catch(() => {
      console.log('An error occurred. Attempting to recover...');
      return Promise.resolve("using cached data");
    });
}

loadData().then(console.log)