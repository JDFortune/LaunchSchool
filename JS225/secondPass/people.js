let people = {
  collection : [],
  id: 0,

  add(person) {
    if (this.isInvalidPerson(person)) return;
    person.id = this.id++;
    this.collection.push(person);
  },

  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  getIndex(person) {
    let index = -1;

    for (let i = 0; i < this.collection.length; i++) {
      if (person.firstName === this.collection[i].firstName &&
          person.lastName === this.collection[i].lastName) {
            index = i;
          }
    }

    return index;
  },

  get(person) {
    if (typeof person === 'number' && this.collection.some(p => p.id === person)) {
      console.log('hello');
      return this.collection.find(p => p.id === person);
    }

    if (this.isInvalidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },

  remove(person) {
    if (this.isInvalidPerson(person)) return;
    let idx = this.getIndex(person);

    this.collection.splice(idx, 1);
  },

  update(person) {
    if (this.isInvalidPerson(person)) return;

    if (this.getIndex(person) !== -1) {
      let p = this.get(person);
      Object.assign(p, person);
    } else {
      this.add(person);
    }
  },
}

people.add({firstName: 'James', lastName: 'Dean'});
people.add({firstName: 'James', lastName: 'Taylor'});
people.add({firstName: 'Jimmy', lastName: 'Dean'});
people.add({firstName: 'John', lastName: 'Smith'});
people.add({firstName: 'Jim', lastName: 'Carry'});

console.log(people.collection);

people.update({firstName: 'James', lastName: 'Dean', profession: 'actor'});
people.update({firstName: 'Daniel', lastName: 'Boon', profession: 'lumberjack'});
people.update({firstName: 'JD', lastName: 'Fortune'});
console.log('');
console.log(people.collection);

console.log(people.get(6));
