function flattenAndUnique(arr1) {
  if (arr1.length === 0) return [];
  let result = [...arr1[0]];
  
  const arrayIncludes = (el) => {
    if (result.includes(el) || result.includes(Number(el))) {
      return false;
    } else {
      return true;
    }
  };
  arr1.slice(1).forEach(arr2 => {
    arr2 = arr2.filter(arrayIncludes);
    result = [...result, ...arr2]
  });

  return result;
}



console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], [1, '3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']