/*
item creator
  - ensures all information is present and valid
item manager
  - creates the items
  - updates information
  - deletes items
  - queries informations about items
reports manager
  - generates reports for a specific item or ALL items
  - Reports for specific items are generated from Report Objects
    - created by report manager

Required info
  - SKU code
    - unique identifier (first 3 letters of item, first 2 letters of category)
      - if the item name is two words and first word is 2 letters, 3rd letter taken from second name
  - Item name: name of item (minimum 5 characters (space not included in count if present))
  - Category (min 5 characters; can only be one word)
  - Quantity: amount in stock (can't be blank)

Implementation
  - Item manager
    - methods
      -create (item name, category, quantity)
        - generates sku code and applies
        - creates item or returns `false` if not created
      - update(SKU code, object)
        - updates any of the information from the object for the item with via sku code
      - delete(SKU code)
        - deletes item from list
      - items
        - list of items
      - inStock
        lists all items with a quantity greater than 0
      - itemsInCategory
        - lists all items of a given category
  - Reports manager
    - init(ItemManager object)
      assigns itemManager to the `items` property
    - createReporter(skucode)
      - returns an object
        - return object has one method `itemInfo`
          - item info - logs all properties of an object as "key:value" pairs (one pair per line)
    - reportInStock
      logs to the console the item names of all itsm that are in stock as comma separated values
  
  Notes:
    1. no need to validate uniqueness of SKU code
    2. each required piece of information for an item corresponds to one property
    3. If any information is invalid, itemCreator returns an object with `notValid` property set to `true`
    4. Created item objects should not have any methods/properties other than required info and inherited
    5. You many add methods to the item manager as deemed necessary
*/

const ItemCreator = (function() {
  function generateSkuCode(name, category) {
    return (name.replace(/\s+/, '').slice(0, 3) +
            category.slice(0, 2)).toUpperCase();
  };

  function isValidName(name) {
    return name.replace(/\s+/g, '').length >= 5;
  };

  function isValidQuantity(quantity) {
    return quantity !== undefined && quantity >= 0;
  };

  function isValidCategory(category) {
    return !category.includes(' ') && category.length >= 5;
  };

  return function(name, category, quantity) {
    if (isValidCategory(category) && isValidQuantity(quantity) && isValidName(name)) {
      this.skuCode = generateSkuCode(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      console.log('valid item');
    } else {
      return { notValid: true }
    }
  }
})();

ItemManager = {
  items: [],

  getItem(skuCode) {
    return this.items.find(item => item.skuCode === skuCode)
  },

  create(name, category, quantity) {
    const item = new ItemCreator(name, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, newInfo) {
    Object.assign(this.getItem(skuCode), newInfo)
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
}

let ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.name).join(','));
  },

  createReporter(skuCode) {
    let item = this.items.items.find(item => item.skuCode === skuCode);
    
    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    }
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

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3
console.log('');
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10