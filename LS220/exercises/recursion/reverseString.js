// function flipStringAsArray(str, start, end) {
//   if (end <= start) return str;
//   str = str.split('');
//   [str[start], str[end]] = [str[end], str[start]];
//   return flipStringAsArray(str.join(''), start + 1, end - 1);
// }

// function reverseString(str) {
//   let start = 0;
//   let end = str.length - 1;
//   return flipStringAsArray(str, start, end);  
// }

function reverseString(str) {
  if (str === '') {
    return str;
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.