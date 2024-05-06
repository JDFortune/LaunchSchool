function Pet(animal, name) {
  this.animal = animal;
  this.name = name;
}

let PetPrototypeMethods = {
  sleep() {
    console.log('I am sleeping');
  },

  wake() {
    console.log('I am awake');
  },
}

Object.assign(Pet.prototype, PetPrototypeMethods);

let pudding = new Pet('Cat', 'Pudding');
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`)
pudding.sleep();
pudding.wake();

let neptune = new Pet('Fish', 'Neptune');
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`)
pudding.sleep();
pudding.wake();

console.log(pudding);
console.log(neptune);

for (let prop in Pet.prototype) {
  console.log(prop);
  console.log('--------')
  console.log(Pet.prototype[prop].toString());
  console.log('')
}