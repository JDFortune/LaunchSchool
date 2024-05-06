function leadingSubstrings(str) {
  let substrings = [];

  for (let i = 1; i <= str.length; i += 1) {
    substrings.push(str.slice(0, i));
  }

  return substrings;
}

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]