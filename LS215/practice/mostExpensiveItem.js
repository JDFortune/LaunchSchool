function mostExpensiveItem(items) {
  let maxValue = -Infinity;
  let maxItem;

  for (let item in items) {
    if (items[item] > maxValue) {
      maxValue = items[item];
      maxItem = item;
    }
  }

  return maxItem;
}

console.log(mostExpensiveItem({
  piano: 2000,
})); //"piano"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
})); //"tv"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
})); //"stereo"