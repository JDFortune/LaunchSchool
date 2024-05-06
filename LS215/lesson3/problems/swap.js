/*
Write a function called swap that takes a string as an argument, and returns a new string, where the alphabetic characters have taken the place of the numeric characters, and vice versa.


Questions:
  1. WIll there always be an equal number of chars and number? no. In this case, we'll switch the first apearing character with the first appearing number (and vice versa.)
  2. Will I always be given an argument? if not, should I return an empty string?
  3. Will I always be given one argument? If given more, how should I handle the extras?
  4. Will the argument always be a string?
  5. Will the string always only contain numbers and letters?
  6. Is the string case sentive?
  7. Could there more than one occurrence of the same character?

Rules:
  - return empty string if argument is empty string
  - if other characters are present, add them to the string as is.
  - if there are less numbers than alphabet characters, and vice versa, leave the extras in place

Data Structure
input: string of characters
output: string of characters with numbers and letters swapped

Algorithm:
  array of alphabet chars
  array number chars
  result string
  alpha index (stars at 0 and increases each time we input a char)
  number index (stars at 0 and increases each time we input a char)

  iterate over the original string characters
    set current character based on index
    if string character is in alpha array and num idex < numarray length
      push num index char into the strying
      increment num index
    else if the string character is in the num array and alpha index < num array length
      push alpha index char into string
      increment alpha index
    else
      push the current character into the string
  
  return result string
*/

function swap(string) {
  let result = '';
  const alphas = string.match(/[a-z]/ig);
  const numbers = string.match(/[0-9]/g);
  let alphaIdx = 0;
  let numIdx = 0;

  if (alphas === null || numbers === null) {
    return string;
  }

  for (let i = 0; i < string.length; ++i) {
    let char = string[i];
    if (alphas.includes(char) && numIdx < numbers.length) {
      result += numbers[numIdx];
      numIdx += 1;
    } else if (numbers.includes(char) && alphaIdx < alphas.length) {
      result += alphas[alphaIdx];
      alphaIdx += 1;
    } else {
      result += char;
    }
  }

  return result;
}




console.log(swap('123abc')); // 'abc123'
console.log(swap('123abcd')); // 'abc123d'
console.log(swap('1234abc')); // 'abc4123'
console.log(swap('1a#2bc3')); // 'a1#b23c'
console.log(swap('123ABc')); // 'ABc123'
console.log(swap('1a2b3c4d')); // 'a1b2c3d4'
console.log(swap('123abc4')); // 'abc1234'
console.log(swap('"'));
console.log(swap('1234'));