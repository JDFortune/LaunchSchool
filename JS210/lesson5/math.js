// function radians(num) {
//   return num / (Math.PI / 180);
// }

// console.log(radians(1));
// console.log(radians(Math.PI));

// let value = -180;

// console.log(Math.abs(value));

// console.log(Math.pow(2, 3));

// console.log(Math.sqrt(16777216));

// let num = 16;
// console.log(Math.pow(num, 6));

// let a = 50.72;
// let b = 49.2;
// let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

function random(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }
  
  let difference = (max - min + 1);
  return Math.floor(Math.random() * difference) + min;
}

console.log(random(1, 5));

