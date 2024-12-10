function sliceTree(startId, endId) {
  let result = [];
  let end = document.getElementById(String(endId));
  
  if (end === null) return undefined;

  let current;
  do {
    current = end;
    result.unshift(current.nodeName);
    end = end.parentNode;
  } while (current.id !== String(startId) && end !== document.body);

  return (end === document.body && current.id !== String(startId) ? undefined : result);
}

console.log(sliceTree(1, 4));
console.log(sliceTree(1, 76));
console.log(sliceTree(2, 5));
console.log(sliceTree(5, 4));
console.log(sliceTree(1, 23));
console.log(sliceTree(1, 22));
console.log(sliceTree(11, 19));