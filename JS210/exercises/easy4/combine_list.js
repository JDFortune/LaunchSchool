function interleave(arr1, arr2) {
  let newArr = [];
  for (let x in arr1) newArr.push(arr1[x],arr2[x]);
  return newArr;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]