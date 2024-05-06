// function makeCar(rate,brakeRate) {
//   return {
//     speed: 0,
//     rate,
//     brakeRate,
//     accelerate() {
//       this.speed += this.rate;
//     },
//     brake() {
//       this.speed -= this.brakeRate;
//       if (this.speed < 0) this.speed = 0;
//     },
//   }
// }

// let sedan = makeCar(8, 6);
// console.log(sedan);
// sedan.accelerate();
// console.log(sedan.speed);
// sedan.brake();
// console.log(sedan.speed);
// sedan.brake();
// console.log(sedan.speed);

// let coupe = makeCar(12, 8);
// console.log(coupe);
// coupe.accelerate();
// console.log(coupe);

// let hatchback = makeCar(9, 7);

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      return this.name + ' is located in ' + this.continent +
              '. I ' + (this.visited ? 'have' : "haven't") +
              ' visited ' + this.name + '.' ;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America', true);
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

canada.visitCountry();
console.log(canada.getDescription()); 