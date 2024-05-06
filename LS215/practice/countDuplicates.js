function countDuplicates(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }

  let count = 0;
  Object.values(counts).forEach(val => {
    if (val > 1) count += 1;
  });

  return count;
}

console.log(countDuplicates("")); // 0
console.log(countDuplicates("abcde")); // 0
console.log(countDuplicates("abcdeaa")); // 1
console.log(countDuplicates("abcdeaB")); // 2
console.log(countDuplicates("Indivisibilities")); // 2