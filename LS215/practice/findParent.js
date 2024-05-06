function findParent(str) {
  const ref = 'abcdefghijklmnopqrstuvwxyz';
  str = str.replace(/\s+/g, '');
  let result = Array.from(Array(26), () => []);

  for (let i = 0; i < str.length; i++) {
    char = str[i];
    let index = ref.indexOf(char.toLowerCase());
    result[index].push(char);
  }

  return result.map(arr => arr.sort()).flat().join('');
}

console.log(findParent("abBA")); // "AaBb"
console.log(findParent("AaaaaZazzz")); // "AaaaaaZzzz"
console.log(findParent("CbcBcbaA")); // "AaBbbCcc"
console.log(findParent("xXfuUuuF")); // "FfUuuuXx"
console.log(findParent("")); // ""