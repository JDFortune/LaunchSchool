function inArray(array1, array2) {
  return array1.filter(str => array2.some(test => test.includes(str))).sort();
}

console.log(inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));
console.log(inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'haarp', 'sharp', 'armstrong']));