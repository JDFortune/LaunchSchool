function findAndRemove(roomsObj) {
  let rooms = Object.keys(roomsObj);

  rooms.forEach(room => {
    let items = Object.keys(roomsObj[room]);
    items.forEach(item => {
      roomsObj[room][item] = Number(roomsObj[room][item]);
      if (Number.isNaN(roomsObj[room][item])) {
        delete roomsObj[room][item];
      }
    });
  })

  return roomsObj;
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
})); /* {
  kitchen: {
    ["gold spoons"]: 900,
    piano: 550,
  },
  cellar: {
    bottle: 750,
  },
}*/