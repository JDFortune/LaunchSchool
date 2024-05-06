let sum = function(num) {
  return [...String(num)].reduce((total, num) => total + parseInt(num, 10), 0);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45