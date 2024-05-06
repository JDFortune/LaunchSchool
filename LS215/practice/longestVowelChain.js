function solve(string) {
  let vowels = string.match(/[aeiou]+/g);
  if (vowels === null) return 0;
  vowels = vowels.map(el => el.length);
  return Math.max(...vowels);
}

console.log(solve("codewarriors") == 2);
console.log(solve("suoidea") == 3);
console.log(solve("iuuvgheaae") == 4);
console.log(solve("ultrarevolutionariees") == 3);
console.log(solve("strengthlessnesses") == 1);
console.log(solve("cuboideonavicuare") == 2);
console.log(solve("chrononhotonthuooaos") == 5);
console.log(solve("iiihoovaeaaaoougjyaw") == 8);