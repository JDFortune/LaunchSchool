let Item = {
  init(id, name, stock, price) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
    return this;
  },

  setPrice(newPrice) {
    if (newPrice < 0) {
      throw Error('Alert: Invalid Price');
    } else {
      this.price = newPrice;
    }
  },

  describeProduct: function() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Price: $${this.price}`);
    console.log(`Stock: ${this.stock}`);
  },
}


let scissors = Object.create(Item).init(0, 'Scissors', 10, 8);
let drill = Object.create(Item).init(1, 'Cordless Drill', 15, 45);
let saw = Object.create(Item).init(2, 'Circular Saw', 12, 95);
let hammer = Object.create(Item).init(3, 'Sledge Hammer', 78, 45);
let boxCutter = Object.create(Item).init(4, 'Box Cutter', 41, 15);

scissors.describeProduct();
hammer.describeProduct();