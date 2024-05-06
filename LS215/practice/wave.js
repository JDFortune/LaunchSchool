function wave(string) {
  let waves = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (/[a-z]/.test(char)) {
      waves.push(string.slice(0,i).toLowerCase() + char.toUpperCase() + string.slice(i + 1).toLowerCase());
    } else {
      continue;
    }
    
  }

  return waves;
}

console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars")); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("")); // []
console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(" gap ")); // [" Gap ", " gAp ", " gaP "]