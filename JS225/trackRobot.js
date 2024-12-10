function trackRobot(...movements) {
  let pos = [0, 0];

  movements.forEach((dist, idx) => {
    let dir = idx % 4;
    [0, 1].includes(dir) ? (pos[dir] += dist) : (pos[dir % 2] -= dist);
  });

  return pos.reverse();
}

console.log(trackRobot(20, 30, 10, 40)); //[-10, 10]

console.log(trackRobot()); //[0, 0]
// No movement means the robot stays at (0, 0).

console.log(trackRobot(-10, 20, 10)); //[20, -20]
// The amount to move can be negative.