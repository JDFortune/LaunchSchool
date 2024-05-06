function getNotesDistribution(notes) {
  let dist = {};
  let ref = [1, 2, 3, 4, 5];

  notes.forEach(obj => {
    obj["notes"].forEach(note => {
      if (ref.includes(note)) {
        dist[note] = dist[note] ? dist[note] + 1 : 1;
      }
    });
  });

  return dist;
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
])); /* {
  5: 3,
  3: 2,
  2: 1
}) */