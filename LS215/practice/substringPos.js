function nthChar(arr) {
  let result = '';
  arr.forEach((str, idx) => result += str[idx]);
  return result;
}

console.log(nthChar(['yoda', 'best', 'has']) == 'yes');
console.log(nthChar([]) == '');
console.log(nthChar(['X-ray']) == 'X');
console.log(nthChar(['No', 'No']) == 'No');
console.log(nthChar(['Chad', 'Morocco', 'India', 'Algeria', 'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']) == 'Codewars');