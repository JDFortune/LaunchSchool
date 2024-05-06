// function neww(constructor, args) {
//   let object = Object.create(constructor.prototype)
//   let result = constructor.apply(object, args);
//   return typeof result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();
// console.log(john.constructor);
// console.log(john);

function Dog(name) {
  this.name = name;
}

Dog.species = 'Canis Lupus';

Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
}

Dog.showSpecies();