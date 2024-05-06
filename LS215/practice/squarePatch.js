function squarePatch(n) {
  return Array.from(Array(n), () => Array(n).fill(n));
}

console.log(squarePatch(2));
console.log(squarePatch(3));
console.log(squarePatch(5));