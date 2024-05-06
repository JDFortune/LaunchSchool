function kebabize(str) {
  str = str.replace(/\d/g, '');
  return str.replace(/([A-Z])/g, (match, char) => {
    return '-' + char.toLowerCase();
  });
}

console.log(kebabize('myCamelCasedString'));// 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps'));//