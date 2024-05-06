function getTotalPrice(list) {
  let total = 0;
  list.forEach(item => total += (item.price * item.quantity));
  return Number(total.toFixed(1));
}

// 1 bottle of milk:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
])); // 1.5

// 1 bottle of milk & 1 box of cereals:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
])); // 4

// 3 bottles of milk:
console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
])); // 4.5

// Several groceries:
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
])); // 10.4

// Some cheap candy:
console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
])); // 0.3