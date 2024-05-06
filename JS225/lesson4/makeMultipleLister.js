function makeMultipleLister(num) {
  return function() {
    for (let i = num; i < 100; i += num) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(13);
lister();