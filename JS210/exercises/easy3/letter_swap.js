function swap(string) {
  const strings = string.split(' ');

  return strings.map(str => {
    if (str.length === 1) {
      return str;
    } else {
      return str[str.length - 1] + str.slice(1,-1) + str[0];
    }
  }).join(' ');
}

// function swap(string) {
//   return string.split(' ').map(string => string.replace(/(^.)(.*)(.$)/, '$3$2$1')).join(' ');
// }

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"