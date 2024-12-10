class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return this.sides * this.sideLength;
  }

}

let square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());

let triangle = new Shape('triangle', 3, 3);

triangle.calcArea = function() {
  let a = this.sideLength;
  let b = this.sideLength;
  let c = this.sideLength;

  return (Math.sqrt((4 * (a ** 2) * (b ** 2)) - (((a ** 2) + (b ** 2) - (c ** 2)) ** 2)) / 4);
}

console.log(triangle.calcPerimeter());
console.log(triangle.calcArea());