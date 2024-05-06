function diceGame(rolls) {
  if (rolls.some(diceRolls => [...new Set(diceRolls)].length === 1)) {
    return 0;
  } else {
    return sum(rolls.map(roll => sum(roll)));
  }
}

function sum(arr) {
  return arr.reduce((total, num) => total + num);
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // 21
console.log(diceGame([[1, 1], [5, 6], [6, 4]])); // 0
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // 27