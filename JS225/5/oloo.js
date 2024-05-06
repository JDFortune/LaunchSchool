// let PetPrototype = {
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },

//   sleep() {
//     console.log('I am sleeping');
//   },

//   wake() {
//     console.log('I am awake');
//   }
// }

// function Pet(animal, name) {
//   this.animal = animal;
//   this.name = name;
// }

// Pet.prototype.sleep = function() {
//   console.log('I am sleeping');
// }

// Pet.prototype.wake = function() {
//   console.log('I am awake');
// }

// let pudding = new Pet('Cat', 'Pudding');
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep();
// pudding.wake();

// let neptune = new Pet('Fish', 'Neptune');
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep();
// neptune.wake();

let Rectangle = class {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	
	getArea() {
		return this.length * this.width;
	}
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);           // function
console.log(rec instanceof Rectangle);   // true
console.log(rec.constructor);            // [class Rectangle]
console.log(rec.getArea());              // 50