function repeatedCharacters(string) {
  let counts = {}
  for (let char of string.split('')) {
    if (Object.keys(counts).includes(char)) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  for (let char in counts) {
    if (counts[char] === 1){
      delete counts[char];
    }
  }

  console.log(counts);
  return counts;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }