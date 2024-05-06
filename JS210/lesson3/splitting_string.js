function splitString(string, delimiter) {
  if (typeof delimiter !== 'string') {
    throw "Error: No delimiter";
  }

  let temp = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(temp);
      temp = ''
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      temp += string[i];
    }
  }

  if (temp) console.log(temp);
}



splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter
console.log('+++++');
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o
console.log('+++++');
splitString('hello', ';');
// logs:
// hello
console.log('+++++');
splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello