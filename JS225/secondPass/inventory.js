const ItemCreator = function() {
  function skuGenerator(name, category) {
    let first = name.replace(/\s+/g, '').slice(0, 3);
    let second = category.slice(0, 2);
    
    return first.toUpperCase() + second.toUpperCase();
  }

  function isValidName(name) {
    return name.replace(/\s+/g, '').length >= 5;
  } 
  
  function isValidCategory(category) {
    return category.replace(/\s+/g, '').length >= 5 && !category.includes(' ');
  }
  
  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }
    
  return function(name, category, quantity) {
    if (isValidName(name) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = skuGenerator(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    } else {
    return { notValid: true };
    }
  }
}();

let ItemManager = {
  items: [],

  getItem(skuCode) {
    return this.items.find(i => i.skuCode === skuCode);
  },

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity);

    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, info) {
    let item = this.getItem(skuCode);
    if (item) Object.assign(item, info);
  },
  
  delete(skuCode) {
    let item = this.getItem(skuCode);
    if (item) this.items.splice(this.items.indexOf(item), 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(({quantity}) => quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
}

let ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);
    if (item) {
      return {
        itemInfo() {
          console.log(`skuCode: ${item.skuCode}`);
          console.log(`itemName: ${item.name}`);
          console.log(`category: ${item.category}`);
          console.log(`quantity: ${item.quantity}`);
        }
      }
    }
  },

  reportInStock() {
    console.log(this.items.inStock().map(({name}) => name).join(', '));
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items
console.log('');

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot
console.log('');

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
console.log('');

ReportManager.reportInStock();
// logs football,kitchen pot
console.log('');

ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
console.log('');

ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)
console.log('');


const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3
console.log('');

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10