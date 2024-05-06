// function isBalanced(str) {
//   let openCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === '(') {
//       openCount += 1
//     } else if (char === ')') {
//       openCount -= 1;
//     }

//     if (openCount < 0) {
//       return false;
//     }
//   }
//   return openCount === 0;
// }

function isBalanced(str) {
  let balanced = true;
  let openCount = 0;

  [...str].forEach(el => {
    if (el === '(') {
      openCount += 1;
    } else if (el === ')') {
      openCount -= 1;
    }

    if (openCount < 0) {
      balanced = false;
    }
  });

  return balanced && openCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false