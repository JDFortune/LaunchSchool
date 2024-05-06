let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));
let ninjaB = new ninjaA.constructor;

// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true