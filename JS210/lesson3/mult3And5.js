function multiplesOfThreeAndFive(min, max) {
  for (let i = min; i <= max; ++i) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive(5, 16);