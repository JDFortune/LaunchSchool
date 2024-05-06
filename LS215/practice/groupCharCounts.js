function groupCharCounts(string) {
  string = string.replace(/[^a-z\d]/ig, '');
  let chars = [...string.toLowerCase()];
  let counts = countChars(chars);
  let groups = groupCounts(counts);
  return sortObj(groups);
}

function sortObj(obj) {
  let sorted = {};
  let sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  sortedKeys.forEach(key => {
    sorted[key] = obj[key].sort();
  });

  return sorted;
}

function groupCounts(obj) {
  let groups = {};

  for (let key in obj) {
    let count = obj[key];
    if (groups[count]) {
      groups[count].push(key);
    } else {
      groups[count] = [key];
    }
  }

  return groups;
}
function countChars(arr) {
  let counts = {};
  arr.forEach(chr => {
    counts[chr] = counts[chr] ? counts[chr] + 1 : 1;
  });

  return counts;
}

console.log(groupCharCounts("Mississippi")); //== {4=>["i", "s"], 2=>["p"], 1=>["m"]}
console.log(groupCharCounts("Hello. Hello? HELLO!!")); //== {6=>["l"], 3=>["e", "h", "o"]}
console.log(groupCharCounts("aaa...bb...c!")); //== {3=>["a"], 2=>["b"], 1=>["c"]}
console.log(groupCharCounts("aaabbbccc")); //== {3=>["a", "b", "c"]}
console.log(groupCharCounts("abc123")); //== {1=>["1", "2", "3", "a", "b", "c"]}