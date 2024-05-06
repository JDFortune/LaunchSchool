function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names.join(' and ') + ' like this';
    case 3:
      return names.slice(0, -1).join(', ') + ' and ' + names.at(-1) + ' like this';
    default:
      return names.slice(0, 2).join(', ') + ' and ' + String(names.slice(2).length) + ' others like this';
  }
}

console.log(likes([])); // must be "no one likes this"
console.log(likes(["Peter"])); // must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // must be "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //