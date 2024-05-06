function getSubsOfFive(str) {
  let subs = [];
  for (let i = 0; i <= str.length - 5; i++) {
    subs.push(str.substr(i, 5));
  }
  
  return subs;
}

function getSubsProducts(arr) {
  let products = {};

  arr.forEach(sub => {
    let digits = [...sub].map(Number)
    let product = digits.reduce((total, digit) => total * digit);
    products[sub] = product;
  });

  return products;
}

function greatestProduct(str) {
  let subs = getSubsOfFive(str);
  let products = getSubsProducts(subs);

  return Math.max(...Object.values(products));
}


console.log(greatestProduct("123834539327238239583")); //== 3240
console.log(greatestProduct("395831238345393272382")); //== 3240
console.log(greatestProduct("92494737828244222221111111532909999")); //== 5292
console.log(greatestProduct("92494737828244222221111111532909999")); //== 5292
console.log(greatestProduct("02494037820244202221011110532909999")); //== 0