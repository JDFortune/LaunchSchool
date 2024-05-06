function reverse(input) {
  let result;
  if (Array.isArray(input)) {
    result = [];
    for (let i = input.length - 1; i >= 0; --i) {
      result.push(input[i]);
    }
  } else {
    result = '';
    for (let i = input.length - 1; i >= 0; --i) {
      result += input[i];
    }
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]