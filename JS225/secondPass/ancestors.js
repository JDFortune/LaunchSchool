// Object.prototype.ancestors = function() {
//   let obj = Object.getPrototypeOf(this);
//   let ancestors = [];
//   while (obj.name) {
//     ancestors.push(obj.name);
//     obj = Object.getPrototypeOf(obj);
//   }
//   ancestors.push('Object.prototype');

//   return ancestors;
// }

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);
  
  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']