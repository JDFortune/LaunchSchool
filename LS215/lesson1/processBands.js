// function processBands(data) {
//   data.forEach(band => {
//     band.name = band.name?.replace('.', '')
//                           .split(' ')
//                           .map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
//     band.country = 'Canada';
//   })
// }

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizeBandName(band.name);
    let newBandName = removeDotsInBandName(capitalizedName);
    
    return {
      name: newBandName,
      country: 'Canda',
      active: band.active
    };
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(string) {
  return string.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function removeDotsInBandName(string) {
  return string.replace(/\./g, '');
}


let formattedBands = processBands(bands);

console.log(formattedBands);