const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];


// const fifteens  = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.table(fifteens);


// const names = inventors.map(({first, last}) => `${first} ${last}`);
// console.log(names);

// const sorted = inventors.sort(({year: yearA}, {year: yearB}) => yearA - yearB);
// console.log(sorted);

// const ageSum = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
// console.log(ageSum);

// function sortByName(p1, p2) {
//   p1 = p1.split(', ')[0];
//   p2 = p2.split(', ')[0];

//   if (p1 < p2) {
//     return -1;
//   } else if (p1 === p2) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// let sortedNames = people.sort(sortByName);

// console.log(sortedNames);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

let counts = {};

data.forEach(word =>  counts[word] = counts[word] + 1 || 1);

console.log(counts);

let reduced = data.reduce((counts, word) => {
  counts[word] = counts[word] + 1 || 1;
  return counts;
}, {});

console.log(reduced);