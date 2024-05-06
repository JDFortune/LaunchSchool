function isOrdSub(smArr, bgArr) {
  bgArr = bgArr.filter(el => smArr.includes(el));
  
  let idx = 0;
  while (smArr[0] !== bgArr[idx]) {
    idx += 1;
  }
  
  bgArr = bgArr.slice(idx);
  
  if (bgArr.length !== smArr.length) return false;

  return bgArr.every((el, idx) => el === smArr[idx]);
}

console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])); // true
console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])); // true
console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])); // false
console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3])); // true