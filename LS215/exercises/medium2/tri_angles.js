function triangle(a1, a2, a3) {
  let angles = [a1, a2, a3];

  if ((angles.reduce((sum, a) => a + sum) !== 180) || angles.some(a => a === 0)) {
    return 'invalid';
  }
  
  if (angles.every(a => a < 90)) {
    return 'acute';
  } else {
    let oneOver90 = 0;
    let one90 = 0;
    angles.forEach(a => {
      if (a > 90) {
        oneOver90 += 1;
      } else if (a === 90) {
        one90 += 1;
      }
    });

    if (oneOver90 === 1 && one90 === 0) {
      return 'obtuse';
    } else if (oneOver90 === 0 && one90 === 1) {
      return 'right';
    } else {
      return 'invlaid';
    }
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"