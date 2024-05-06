function titleCase(string, exceptions = '') {
  let words = string.split(' ');
  exceptions = exceptions.split(' ').map(word => word.toLowerCase());

  return words.map((word, idx) => {
    if (exceptions.includes(word.toLowerCase()) && idx !== 0) {
      return word.toLowerCase()
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of')); //== 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); //== 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); //== 'The Quick Brown Fox'

