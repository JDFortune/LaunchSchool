function star(n) {
  let result = [];
  let leftSpace = 0;
  let innerSpace = (n - 3) / 2;

  while(innerSpace >= 0) {
    let stars = ['*', '*', '*'];
    result.push(' '.repeat(leftSpace) + stars.join(' '.repeat(innerSpace)));
    leftSpace += 1;
    innerSpace -= 1;
  }

  result = [...result, '*'.repeat(n), ...result.reverse()];
  console.log(result.join('\n'));
}

star(21);

