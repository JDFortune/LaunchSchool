// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

  // describe(): string {
  //   return `${this.name} is ${this.age} years old!`
  // }
// }


// public keyword in constructor parameters automatically creates properties with the same names and types

class Person {
  constructor(public name: string, public age: number) {}
  
  describe(): string {
    return `${this.name} is ${this.age} years old!`
  }
}

const person = new Person("Alice", 30);
console.log(person.describe());
