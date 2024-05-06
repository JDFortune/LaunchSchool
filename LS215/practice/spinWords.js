function spinWords(string) {
  let strings = string.split(' ');
  return strings.map(str => str.length >= 5 ? [...str].reverse().join('') : str).join(' ');
}

console.log(spinWords("Hey fellow warriors")); //== "Hey wollef sroirraw"
console.log(spinWords("This is a test")); //== "This is a test"
console.log(spinWords("This is another test")); //== "This is rehtona test"
console.log(spinWords('test')); //== ‘test’