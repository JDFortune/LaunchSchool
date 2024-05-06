class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car {
  constructor(make, model) {
    super(make, model, 4)
  }
}

class Motorcycle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck {
  constructor(make, model, payload) {
    super(make, model, 6)
    this.payload = payload;
  }
}