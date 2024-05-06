function comp(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] ** 2 !== b[i]) {
      return false;
    }
  }

  return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])); // true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11] , [132, 14641, 20736, 361, 25921, 361, 20736, 361])); // false
console.log(comp(null, [1, 2, 3])); // false
console.log(comp([1, 2], [])); // false
console.log(comp([1, 2], [1, 4, 4])); // false