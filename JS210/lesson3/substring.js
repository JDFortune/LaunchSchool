function substr(string, start, length) {
  let newString = '';

  if (start < 0) start = string.length + start;

  if (start + length > string.length) length = string.length - start;

  let count = 0;
  while (count < length) {
    newString += string[start + count];
    count += 1;
  }

  return newString;
}

// Launch School Solution
// function substr(string, start, length) {
//   if (start < 0) start = string.length + start;

//   let newString = '';
//   for (let count = 0; count < length; ++count) {
//     let index = start + count;

//     if (string[index] === undefined) break;

//     newString += string[index];
//   }

//   return newString;
// }

// let string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""

function substring(string, start, end) {
  let newString = '';
  
  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start > string.length) {
    start = string.length;
  }
  
  if (end < 0) {
    end = 0;
  } else if (end > string.length || end === undefined) {
    end = string.length;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (end === string.length - 1) {
    end = string.length + 1;
  }

  while (start < end) {
    newString += string[start];
    start += 1;
  }

  return newString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"