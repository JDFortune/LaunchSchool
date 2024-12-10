
document.addEventListener('DOMContentLoaded', () => {

  let linkedOptions = {
    classifications: {
      Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
      Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
      'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
      'Cold-blooded': ['Salmon', 'Turtle'],
      Mammal: ['Bear', 'Whale'],
      Bird: ['Ostrich'],
    },
    animals: {
      Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
      Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
      Turtle: ['Vertebrate', 'Cold-blooded'],
      Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
      Salmon: ['Vertebrate', 'Cold-blooded'],
      Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
    }
  }

  let animals = document.querySelector('#animals');
  let classification = document.querySelector('#animal-classifications');
  let clearFiltersBtn = document.querySelector('#clear');
  let classificationValue;
  let animalValue;

  function setDefault(event) {
    event.preventDefault();
    setOptions(classification, linkedOptions['animals']['Animals']);
    setOptions(animals, linkedOptions['classifications']['Classifications']);
  }

  function setOptions({options}, filteredList) {
    options.length = 0;
    filteredList.forEach((value, index) => {
      options[index] = new Option(value);
    });
  }
  
  classification.addEventListener('click', event => {
    classificationValue = event.target.value;
    setOptions(animals, linkedOptions['classifications'][classificationValue]);
  });

  animals.addEventListener('click', event => {
    animalValue = event.target.value;
    setOptions(classification, linkedOptions['animals'][animalValue]);
  });

  clearFiltersBtn.addEventListener('click', setDefault);
});