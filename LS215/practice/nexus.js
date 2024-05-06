function nexus(obj) {
  let diffs = {};

  for (let rank in obj) {
    diffs[rank] = Math.abs(rank - obj[rank]);
  }

  let minDiff = Math.min(...Object.values(diffs));
  let nexusRanks = Object.keys(diffs).filter(rank => diffs[rank] === minDiff);

  return nexusRanks.length > 1 ? Math.min(...nexusRanks) : nexusRanks[0];
}

console.log(nexus({1: 3, 3: 3, 5: 1})); // 3
console.log(nexus({1: 10, 2: 6, 3: 4, 5: 1})); // 3
console.log(nexus({1: 10, 2: 3, 3: 4, 5: 1})); // 2