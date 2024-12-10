const filterList = {
  'animal-classifications': {
    Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    Vertebrate: ['Animals', 'Bear', 'Turtle', 'Whatle', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Animals', 'Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Animals', 'Salmon', 'Turtle'],
    Mammal: ['Animals', 'Bear', 'Whale'],
    Bird: ['Animals', 'Ostrich'],
  },
  'animals': {
    Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird' ],
    Bear: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Classifications', 'Vertebrate', 'Cold-blooded'],
    Whale: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon: ['Classifications', 'Vertebrate', 'Cold-blooded'],
    Ostrich: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Bird'],
  }
}

function clearOptions(selectElement) {
  [...selectElement.options].forEach(option => option.remove());
}

function buildOptions(list, selectToPopulate) {
  list.forEach(optionValue => {
    let option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionValue;
    selectToPopulate.add(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let classifications = document.querySelector('#animal-classifications');
  let animals = document.querySelector('#animals');
  let clearBtn = document.querySelector('#clear');

  classifications.addEventListener('change', function(event) {
    clearOptions(animals);
    let list = filterList[this.id][this.value]
    buildOptions(list, animals);
  });

  animals.addEventListener('change', function(event) {
    let list = filterList[this.id][this.value];
    clearOptions(classifications);
    buildOptions(list, classifications);
  });

  clearBtn.addEventListener('click', () => {
    clearOptions(animals);
    clearOptions(classifications);
    buildOptions(filterList['animal-classifications']['Classifications'], animals);
    buildOptions(filterLIst['animals']['Animals'], classifications);

  })

});