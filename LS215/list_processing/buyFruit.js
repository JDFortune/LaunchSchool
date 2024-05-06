function buyFruit(arr) {
  return arr.flatMap(([item, amount]) => Array(amount).fill(item));
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);