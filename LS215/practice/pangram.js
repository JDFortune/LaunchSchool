function panagram(string) {
  let chars = [];
  [...string].forEach(char => {
    char = char.toLowerCase();
    if (/[a-z]/i.test(char) && !chars.includes(char)) {
      chars.push(char);
    }
  });

  return chars.length === 26;
}

console.log(panagram("The quick brown fox jumps over the lazy dog."));
console.log(panagram("This is not a pangram."));