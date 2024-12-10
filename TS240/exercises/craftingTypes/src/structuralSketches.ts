type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

const computer: Device = {
  manufacturer: "ASUS",
  model: "Oof",
  year: 2022,
}

const smartphone = {
  manufacturer: "Apple",
  model: "iphone 11",
  year: 2018,
}

const otherSmartphone: Device = smartphone;