function makeDoubler(caller) {
  return function(number) {
    console.log(`This function was called by ${caller}.`)
    return number + number;
  }
}

const doubler = makeDoubler('JD');

console.log(doubler(5));