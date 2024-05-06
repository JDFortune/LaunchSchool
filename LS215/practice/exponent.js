// function power(num1, num2) {
//   if (num2 < 0) return null;
//   return num1 ** num2;
// }

// console.log(power(2, 3)); // 8
// console.log(power(10, 0)); // 1
// console.log(power(-5, 3)); // -125
// console.log(power(-4, 2)); // 16
// console.log(power(10, 0)); // 1
// console.log(power(2, 3)); // 8
// console.log(power(3, 2)); // 9
// console.log(power(-5, 3)); // -125
// console.log(power(-4, 2)); // 16
// console.log(power(8, -2)); // nil

// function solution(str) {
//   let result = [];
//   let strings = [...str];

//   while (strings.length > 0) {
//     result.push(strings.splice(0, 2).join(''));
//   }

//   return result.map(sub => sub.padEnd(2, '_'));
// }

function solution(str) {
  if (str.length % 2 === 1) str = str + '_';
  return str.match(/../g) || [];
}
console.log(solution('abc')); // ['ab', 'c_']
console.log(solution('abcdef')); // ['ab', 'cd', 'ef']
console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []
