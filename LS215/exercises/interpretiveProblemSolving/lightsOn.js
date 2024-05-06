/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.


Rules:
  - you have (n) number of lights, initially set to off
  - for (n) rounds, iterate through the array of lights and flip on lights that are evening divisible by the round number
  - transform on values to their index number;
  - filter any lights that are off

*/

// function lightsOn(switchCount) {
//   return Array(switchCount).fill(0)
//                            .map((_, idx) => idx + 1)
//                            .filter(num => Math.sqrt(num) === Math.floor(Math.sqrt(num)));
// }

function lightsOn(switchCount) {
  let switches = Array.from(Array(switchCount), () => false);
  
  for (let round = 1; round <= switchCount; round++) {
    for (let idx = 0; idx < switchCount; idx++) {
      if ((idx + 1) % round === 0) {
        switches[idx] = !switches[idx];
      }
    }
  }

  switches = switches.map((el, idx) => el ? idx + 1 : el)
  return switches.filter(el => el);
}

console.log(lightsOn(1000));