"use strict" 

// get the sorted scores
// set two num vars (currentRank, currentPos)
// set obj scoreRanks
// iterate through scores
//   if (scoreRanks includes current value as key) {
//     increase currentPos
//   } else {
//     increase currentPos;
//     set currentRank to currentPos
//     set scoreRansk[score] to currentRank
//   }

//   if scoreRanks does not include the String value as a key
//     set scoreRanks[stringValueKey] to currentRank

// use the given string name to find the scoreValue
// use the score value to retunr the scoreRanks

// function competition_rank(scores, student) {
//   let sortedScores = Object.values(scores).sort((a, b) => b - a);

//   return sortedScores.reduce((ranks, score, currentRank) => {
//     ranks[score] = ranks[score] || currentRank + 1;
//     return ranks
//   }, {})[scores[student]];
// }

// console.log(competition_rank({
//   George: 96,
//   Emily: 95,
//   Susan: 93,
//   Jane: 89,
//   Brett: 82
//   }, "Jane"));

// console.log(competition_rank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 87,
//   Bruce: 87,
//   Scott: 84
//   }, "Bruce"));


// function someFunc(arg = 'hello', arg2) {
//   console.
// }
let age = 30;
age = age.length;

console.log(age);
