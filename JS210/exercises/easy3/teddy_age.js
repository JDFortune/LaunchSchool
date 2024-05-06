function randomBetween(min, max) {
  [min, max] = min > max ? [max, min] : [min, max];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 200);

console.log(`Teddy is ${age} years old!`);