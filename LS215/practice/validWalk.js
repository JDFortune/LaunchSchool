function validWalk(arr) {
  if (arr.length !== 10) return false;

  let dirCount = {};
  arr.forEach(dir => dirCount[dir] = dirCount[dir] ? dirCount[dir] + 1 : 1);

  return dirCount['e'] === dirCount['w'] && dirCount['s'] === dirCount['n'];
}
console.log(validWalk(['n','s','n','s','n','s','n','s','n','s']));// == true
console.log(validWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));// == false
console.log(validWalk(['w']));// == false
console.log(validWalk(['n','n','n','s','n','s','n','s','n','s']));// == false