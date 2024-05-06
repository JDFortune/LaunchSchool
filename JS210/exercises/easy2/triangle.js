function triangle(num) {
  let rows = [];
  let count = 1;

  while (count <= num) {
    console.log('*'.repeat(count).padStart(num, ' '));
    count += 1;
  }
}

triangle(5);

console.log('');

triangle(9);