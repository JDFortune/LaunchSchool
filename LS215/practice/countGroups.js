function countOccurrences(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let counts = {};

  arr.forEach(num => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });

  return counts;
}

console.log(countOccurrences([1,1,2,2,2,3])); // {1=>2, 2=>3, 3=>1}
console.log(countOccurrences([])); // nil
console.log(countOccurrences(null)); // nil
console.log(countOccurrences([1, 7, 5, -1])); // {1=>1, 7=>1, 5=>1, -1=>1}