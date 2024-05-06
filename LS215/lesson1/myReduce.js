function myReduce(array, func, initial = undefined) {
  let index = initial ? 0 : 1;
  let value = initial ? initial : array[0];

  array.slice(index).forEach(element => value = func(value, element));
  console.log(value);
  return value;
}

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// myReduce([5, 12, 15, 1, 6], smallest);           // 1
// myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

longestWord(['abc', 'launch', 'targets', '']);      // "targets"