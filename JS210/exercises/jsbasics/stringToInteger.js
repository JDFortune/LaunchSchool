const DIGITS = { 
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToNumbers(str) {
  let digits = [];

  for (let i = 0; i < str.length ; ++i) {
    digits.push(DIGITS[str[i]]);
  }

  return digits
}

function stringToInteger(str) {
  let value = 0;
  let digits = stringToNumbers(str);
  
  for (let i = 0; i < digits.length; ++i){
    value = 10 * value + digits[i];
  }

  return value
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default:  return stringToInteger(str);
  }
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100