function groupSeats(seats, n) {
  let count = 0;
  seats.forEach(row => {
    for (let i = 0; i <= row.length - n; i++) {
      let group = row.slice(i, i + n);
      console.log(group);
      if (group.every(seat => seat === 0)) {
        count += 1;
      }
    }
  });

  return count;
}

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2)); // 3

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4)); // 2