function letterCaseCount(string) {
  result = {lowercase: 0, uppercase: 0, neither: 0};

  [...string].forEach(char => {
    if (char.match(/[A-Z]/)) {
      result.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
  })

  return result;
}

function letterCaseCount(string) {
  let uppercase = string.match(/[A-Z]/g) || [];
  let lowercase = string.match(/[a-z]/g) || [];
  let neither = string.match(/[^a-z]/ig) || [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }