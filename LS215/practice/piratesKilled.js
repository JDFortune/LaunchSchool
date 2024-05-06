function piratesKilled(gold, threshold) {
  let max = Math.max(...gold);
  let difference = gold.map(g => max - g);

  for (let i = 0; i < difference.length; i++) {
    if (threshold[i] < difference[i]) {
      return true;
    }
  }

  return false;
}

console.log(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5])); // false

console.log(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1])); // true

console.log(piratesKilled([3, 3, 10], [7, 7, 0])); // false

console.log(piratesKilled([3, 3, 10], [6, 6, 0])); // true