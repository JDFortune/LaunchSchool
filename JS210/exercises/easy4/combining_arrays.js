function union(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return uniqueElements(newArr);
}

function uniqueElements(arr) {
  return arr.reduce((newArr, el) => {
    if (!newArr.includes(el)) newArr.push(el);
    return newArr;
  }, []);
}
console.log(union([1, 3, 3, 5], [3, 6,4, 4, 1, 9]));    // [1, 3, 5, 6, 9]

console.log(uniqueElements([1, 3, 3, 4, 3, 5, 6]));