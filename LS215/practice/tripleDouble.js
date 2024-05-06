function tripleDouble(num1, num2) {
  let num1Triples = String(num1).match(/(\d)\1{2}/g)?.map(str => str.slice(0, 2));

  if (Array.isArray(num1Triples)) {
    for (let double of num1Triples) {
      if (String(num2).includes(double)) return 1;
    }
  }

  return 0;
}

console.log(tripleDouble(451999277, 41177722899)); // 1
console.log(tripleDouble(1222345, 12345)); // 0
console.log(tripleDouble(122345, 12345)); // 0