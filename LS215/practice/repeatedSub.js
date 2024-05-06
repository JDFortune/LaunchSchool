function getSubstrings(string) {
  let subs = [];

  for (let length = 1; length <= string.length; length++) {
    subs.push(string.substr(0, length));
  }

  return subs;
}

function repeatedSub(str) {
  let subs = getSubstrings(str);
  subs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < subs.length; i++) {
    let sub = subs[i];
    let length = Math.floor(str.length / sub.length);
    if (sub.repeat(length) === str) {
      return [ sub, length ];
    }
  }
}

console.log(repeatedSub("ababab"));
console.log(repeatedSub("abcde"));
