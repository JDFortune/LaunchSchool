function substrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      result.push(str.slice(i, j));
    }
  }

  console.log(result);
}

substrings('abcde');