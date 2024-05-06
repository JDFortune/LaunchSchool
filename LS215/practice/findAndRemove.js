function findAndRemove(obj) {
  for (let room in obj) {
    for (let item in obj[room]) {
      let itemValue = Number(obj[room][item])
      obj[room][item] = itemValue;

      if (Number.isNaN(itemValue)) {
        delete obj[room][item];
      }
    }
  }

  return obj;
}

console.log(findAndRemove({
  bedroom: {
    slippers: "10000",
    piano: "550",
    call: "vet",
    travel: "world",
  },
})); /* {
  bedroom: {
    slippers: 10000,
    piano: 5500,
  },
}
*/
console.log(findAndRemove({
  kitchen: {
    ["gold spoons"]: "900",
    piano: "550",
    notes: "ga0r76ba22g4e",
  },
  cellar: {
    reminder: "dog",
    bottle: "750",
  },
})); /*{
  kitchen: {
    ["gold spoons"]: 900,
    piano: 550,
  },
  cellar: {
    bottle: 750,
  },
}
*/