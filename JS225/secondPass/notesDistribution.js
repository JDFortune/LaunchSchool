function getNotesDistribution(arr) {
  let obj = {};

  arr.forEach(({notes}) => {
    notes.forEach(num => {
      if ([1, 2, 3, 4, 5].includes(num)) obj[num] = obj[num] ? obj[num] + 1 : 1;
    });
  });

  return obj;
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));