/*

height, bounce percent, window height

if height > window height seen starts at 1;

each time the bounce zenith is heigher than the window, add 2
if the height is the same as the window, we'll only add 1

*/

function bouncingBall(initHeight, bounce, windowHeight) {
  if (initHeight <= windowHeight || bounce <= 0 || bounce >= 1) return -1;
  let seen;
  let height = initHeight;

  if (initHeight > windowHeight) {
    seen = 1;
  }
  

  while (Math.floor(height) > 0) {
    height *= bounce;
    if (height > windowHeight) {
      seen += 2;
    }
  }

  return seen;
}

console.log(bouncingBall(3, 0.66, 1.5)); // 3
console.log(bouncingBall(30, 0.66, 1.5)); // 15
console.log(bouncingBall(30, 0.75, 1.5)); // 21
console.log(bouncingBall(30, 0.4, 10)); // 3
console.log(bouncingBall(40, 1, 10)); // -1
console.log(bouncingBall(-5, 0.66, 1.5)); // -1
console.log(bouncingBall(1, 0.66, 0.66)); // 1
console.log(bouncingBall(1, 0.66, 1)); // -1