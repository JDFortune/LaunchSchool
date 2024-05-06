/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match
str2, otherwise returns false.

Questions:
  - Will we always get two argument? What should we do with extra arguments? What should we do if less than two arguments are provided?
  - Will arguments always be strings?
  - Will our testing be case-sensitive? they are not case sensitve

Notes:
  - test the strings as lowercase characters

Data:
  inputs; two strings
  output: boolean true or false if the first string letter can be used to create the second string

Alrgorithm:
  - lowercase the strings
  - **count the occurence of characters in each string
  - filter out unused keys from the first string counts obj
  - iterate through second string count obj
      set second object count to its value or 0
    - if count of character in first string is less than second string
      return false
  - return true

- count occruents
  declare an empty obj
  - iterate over array of characters
      - if the key for the char exists in obj
        increment count by 1
      - else
        set key count to 1
  - return obj
*/

function scramble(test, str) {
  test = test.toLowerCase();
  str = str.toLowerCase();
  let countTest = countChars(test);
  let countStr = countChars(str);

  for (let key in countTest) {
    if (!countStr[key]) {
      delete countTest[key];
    }
  }

  let strKeys = Object.keys(countStr);

  for (let i = 0; i < strKeys.length; i++) {
    let char = strKeys[i];
    let count = countTest[char] || 0;
    if (count < countStr[char]) {
      return false;
    }
  }

  return true;
}

function countChars(str) {
  let count = {};
  [...str].forEach(chr => {
    count[chr] = count[chr] ? count[chr] + 1: 1;
  });

  return count;
}


console.log(scramble('rkqodlw', 'world')); //  true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); //  true
console.log(scramble('katas', 'steak')); //  false
console.log(scramble('rkqodlw','world')); //  true
console.log(scramble('cedewaraaossoqqyt','codewars')); //  true
console.log(scramble('katas','steak')); //  false
console.log(scramble('scriptjava','javascript')); //  true
console.log(scramble('scriptingJava','javascript')); //  true