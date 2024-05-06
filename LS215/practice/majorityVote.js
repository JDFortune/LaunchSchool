// function majorityVote(votes) {
//   let counts = getVoteCounts(votes)

//   for (let vote in counts) {
//     if (counts[vote] > votes.length / 2) {
//       return vote;
//     }
//   }

//   return null;
// }

// function getVoteCounts(votes) {
//   let counts = {};

//   votes.forEach(vote => {
//     counts[vote] = counts[vote] ? (counts[vote] + 1) : 1;
//   });

//   return counts;
// }


function majorityVote(arr) {
  return [...new Set(arr)]
            .filter(vote => arr.filter(a => a === vote).length > arr.length / 2)
            [0] || null;
}
console.log(majorityVote(["A", "A", "B"])); // "A"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // "A"
console.log(majorityVote(["A", "B", "B", "A", "C", "C"])); // null