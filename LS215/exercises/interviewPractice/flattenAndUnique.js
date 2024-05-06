function flattenAndUnique(arr) {
  let result = [];

  arr.forEach(nestedArray => {
    nestedArray.forEach(el => {
      if (typeof el === 'string') {
        if (/\d+/.test(el)) el = Number(el);
      }

      if (!result.includes(el)) result.push(el);
    });
  });

  return result;
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']

/*
Will the argument always be an array?
Will I ever receive no arguments or more than one argument? If so, how should I handle these?
Will the array always contain one or more nested arrays? Will it ever just be one nested array?
Will the outer array or the nested arrays ever be sparse? How should I handle them?
Will the nested arrays ever contain objects or datatypes other than primitives? If so should they be tested for value equality?
Will the nested arrays ever contain NaN or Infinity? How should I handle these?
Will the array ever contain octal numbers?


*/