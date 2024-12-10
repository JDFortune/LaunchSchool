// function isPalindrome(str) {
//   if (str.length < 2) return true;
//   return str[0] === str.at(-1) && isPalindrome(str.slice(1, -1))
// }

function isPalindrome(str, start, end) {
  if (start >= end) return true;
  return str[start] === str[end] && isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome('hello', 0, 4))
console.log(isPalindrome('isgoodoogsi', 0, 10))
console.log(isPalindrome('tacocat', 0, 6))