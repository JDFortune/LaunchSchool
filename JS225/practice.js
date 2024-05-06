// let me = {};
// me.firstName = 'Jane';
// me.lastName = 'Doe';

// let friend = {
//   firstName: 'John',
//   lastName: 'Smith',
// }

// let mother = {
//   firstName: 'Amber',
//   lastName: 'Doe',
// }

// let father = {
//   firstName: 'Shane',
//   lastName: 'Doe',
// }

// let people = {
//   collection: [me, friend, mother, father],
//   lastIndex: 0,

//   setExistingCollectionIDs() {
//     this.collection.forEach((person, idx) => {
//       Object.assign(person, {id: this.lastIndex});
//       this.incrementId();
//     });
//   },

//   incrementId() {
//     this.lastIndex += 1;
//   },

//   rollCall() {
//     this.collection.forEach(this.fullName);
//   },

//   fullName(person) {
//     console.log(person.firstName + ' ' + person.lastName);
//   },

//   add(newPerson) {
//     if (this.isInvalidPerson(newPerson)) return;

//     this.collection.push(Object.assign(newPerson, {id: this.lastIndex}));
//     this.incrementId();
//   },

//   getIndex(person) {
//     return this.collection.indexOf(this.get(person));
//   },

//   get(person) {
//     if (this.isInvalidPerson(person)) return;

//     return this.collection.find(comparator => {
//       return comparator.firstName === person.firstName &&
//              comparator.lastName === person.lastName;
//     });
//   },

//   remove(person) {
//     if (this.isInvalidPerson(person)) return;
//     let index = this.getIndex(person);

//     if (index >= 0) this.collection.splice(index, 1);
//   },

//   update(person) {
//     if (this.isInvalidPerson(person)) return;

//     let existingPersonID = this.getIndex(person);
//     if (existingPersonID === -1) {
//       this.add(person);
//     } else {
//       this.collection[existingPersonID] = Object.assign(person, {id: this.lastIndex});
//       this.incrementId();
//     }
//   },

//   isInvalidPerson(person) {
//     return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
//   }
// }
// people.setExistingCollectionIDs();
// people.add({firstName: "JD", lastName: "Fortune"});
// console.log(people.collection);
// console.log('');

// people.remove({firstName: 'Jane', lastName: 'Doe'});

// console.log('');
// people.update({firstName: 'George', lastName: 'Lucas'});

// console.log(people.collection);
// people.update({firstName: 'JD', lastName: 'Fortune', age: 34});
// console.log(people.collection);
function say() {
  console.log('hi');
}
console.log(this);

this.say();