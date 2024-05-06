function dubstep(string) {
  return string.replace(/WUB/g, ' ').replace(/\s+/g, ' ').trim();
}

console.log(dubstep("AWUBBWUBC")); //== "A B C"
console.log(dubstep("AWUBWUBWUBBWUBWUBWUBC")); //== "A B C"
console.log(dubstep("WUBAWUBBWUBCWUB")); //== "A B C"