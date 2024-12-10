const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

class CarShop {
  #carData;
  #templates;
  #selects;
  #carProperties;

  constructor(data) {
    this.#carData = data;
    this.#selects = [...document.querySelectorAll('select')];
    this.#carProperties = this.#mapCarProperties();
  }

  init() {
    this.#templates = this.#parseTemplates();
    this.#populateFormChoices(this.#carData);
    this.#renderCars(this.#carData);
    this.#addOptionChangeEvent();
    this.#addFilterCarsEvent();
  }

  #mapCarProperties() {
    return Object.keys(this.#carData[0]).filter(prop => prop !== 'image');
  }

  #addOptionChangeEvent() {
    this.#selects.forEach(select => {
      select.addEventListener('change', (event => {
        let carsArray = this.#filterCarOptions();
        this.#populateFormChoices(carsArray);
      }).bind(this));
    });
  }

  #filterCarOptions() {
    let carsArray = this.#carData;
    this.#selects.forEach(option => {
      carsArray = this.#filterBy(carsArray, option.id, option.value)
    })
    return carsArray;
  }

  #filterBy(carsArray, field, value) {
    if (value === 'All' || value === 'Any') {
      return carsArray;
    }
    return carsArray.filter(car => String(car[field]) === value)
  }

  #addFilterCarsEvent() {
    document.querySelector('#filter_cars').addEventListener('submit', (event => {
      event.preventDefault();
      let carsArray = this.#filterCarOptions();
      this.#renderCars(carsArray);
    }).bind(this));
  }

  #parseTemplates() {
    let templates = {};
    let scripts = document.querySelectorAll('script[type="text/x-handlebars"]')
    scripts.forEach(script => {
      templates[script.id] = Handlebars.compile(script.innerHTML);
      if (script.dataset['type'] === 'partial') {
        Handlebars.registerPartial(script.id, templates[script.id])
      }
    });
    return templates;
  }

  // populates the option selections based on the cars given to it.
  #populateFormChoices(carsArray) {
    this.#carProperties.forEach(property => {
      let allProperties = this.#addDefaultAndFilterUniqueValues(carsArray, property);
      let select = document.querySelector(`#${property}`);
      let current = select.options[select.selectedIndex];
      select.innerHTML = this.#templates.list_options({option: allProperties});
      if (current) {
        this.#selectCurrent(select, current.value);
      }
    });
  }

  #selectCurrent(selectElement, value) {
    for (let i = 0; i < selectElement.children.length; i += 1) {
      if (selectElement.children[i].value === value) {
        selectElement.children[i].selected = true;
      }
    }
  }

  // adds the default value and ensures no repeat values
  #addDefaultAndFilterUniqueValues(carsArray, property) {
    let defaultValue = this.#getDefaultOption(property)

    let filteredValues = [defaultValue];
    carsArray.forEach(car => {
      if (!filteredValues.includes(car[property])) {
        filteredValues.push(car[property]);
      }
    });
    return filteredValues;
  }

  #renderCars(carsArray) {
    let carDivs = this.#templates.many_cars({car: carsArray})
    document.querySelector('main').innerHTML = carDivs;
  }

  #getDefaultOption(property) {
    if (property === 'make' || property === 'model') {
      return 'All'
    } else {
      return 'Any'
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let shop = new CarShop(cars);
  shop.init();
})