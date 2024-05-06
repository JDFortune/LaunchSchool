function possiblePath(path) {
  let refPath = [1, 2, "H", 4, 3];
  
  for (let i = 0; i < path.length - 1; i++) {
    let currentRoom = path[i];
    let pathRefIdx = refPath.indexOf(currentRoom);
    let possible = [refPath[pathRefIdx + 1], refPath[pathRefIdx - 1]].filter(room => room !== undefined);
    if (!possible.includes(path[i + 1])) return false;
  }

  return true;
}

console.log(possiblePath([1, 2, "H", 4, 3])); // true
console.log(possiblePath(["H", 1, 2])); // false
console.log(possiblePath([4, 3, 4, "H", 4, "H"])); // true