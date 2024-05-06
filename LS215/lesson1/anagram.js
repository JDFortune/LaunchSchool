function anagram(word, list) {
  return list.filter(check => areAnagrams(word, check))
}

function areAnagrams(word, check) {
  let sortedWord = word.split('').sort();
  let sortedCheck = check.split('').sort();

  return arraysEqual(sortedWord, sortedCheck);
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((letter, index) => letter === arr2[index]);
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]