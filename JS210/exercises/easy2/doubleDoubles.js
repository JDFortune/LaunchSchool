// function twice(num) {
//   mid = String(num).length / 2
//   return String(num).slice(0, mid) === String(num).slice(mid) ? num : num * 2;
// }

function twice(num) {
  let str = String(num);

  let isDouble = /^(\d+)\1$/.test(str);

  if (isDouble) return num;
  return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676