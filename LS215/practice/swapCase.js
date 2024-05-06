function swap(str) {
  let words = str.split(' ');
  let result = [];

  words.forEach(word => {
    let temp = [];
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (/[a-z]/.test(char)) {
        temp.push(char.toUpperCase());
      } else {
        temp.push(char.toLowerCase());
      }
    }
    result.push(temp.join(''));
  });
  

  return result.reverse().join(' ');
}

console.log(swap('Example Input'));