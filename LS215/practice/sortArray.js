function sortArray(arr) {
  arr.sort(sortByWord);
  return arr;
}

function sortByWord(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  if (str1 < str2) {
    return -1;
  } else if (str2 > str1) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sortArray(["Hello", "there", "I'm", "fine"]));// ["fine", "Hello", "I'm", "there"]
console.log(sortArray(["C", "d", "a", "Ba", "be"]));// ["a", "Ba", "be", "C", "d"]
console.log(sortArray(["CodeWars"]));// ["CodeWars"]