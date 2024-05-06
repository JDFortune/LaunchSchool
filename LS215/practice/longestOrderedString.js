function longest(str) {
  if (str.length === 0) {
    return '';
  }

  let subs = [];
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (temp.length === 0 || temp.at(-1) <= char) {
      temp.push(char);
    } else {
      subs.push(temp);
      temp = [char];
    }
  }
  
  if (temp.length > 0) subs.push(temp);

  subs.sort((a, b) => b.length - a.length);

  return subs[0].join('');
}

console.log(longest('asd')); // == 'as'
console.log(longest('nab')); // == 'ab'
console.log(longest('abcdeapbcdef')); // == 'abcde'
console.log(longest('asdfaaaabbbbcttavvfffffdf')); // == 'aaaabbbbctt'
console.log(longest('asdfbyfgiklag')); // =='fgikl'
console.log(longest('z')); // == 'z'
console.log(longest('zyba')); // == 'z'
console.log(longest(''));