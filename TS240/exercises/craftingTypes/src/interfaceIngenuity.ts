interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
}

const myCar: Car = {
  make: "Mazda",
  model: "CX-5",
  year: 2018,
  doors: 4,
}