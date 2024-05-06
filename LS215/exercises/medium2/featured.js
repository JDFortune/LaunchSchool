function featured(num) {
  if (num >= 9876543201) {
    return 'number is too high';
  }

  num += 1;

  while (!isFeatured(num)) {
    num +=1;
  }

  return num;
}

function isFeatured(num) {
  if (num % 7 !== 0 || num % 2 === 0) {
    return false;
  } else {
    let digitCounts = countDigits(num);
    if (Object.values(digitCounts).some(digit => digit !== 1)) {
      return false;
    } else {
      return true;
    }
  }
}

function countDigits(num) {
  let counts = {};
  
  [...String(num)].forEach(digit => {
    counts[digit] = counts[digit] ? counts[digit] + 1 : 1;
  });

  return counts;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."