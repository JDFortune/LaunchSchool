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
    this.#selects = document.querySelectorAll('select');
    this.#carProperties = this.#mapCarProperties();

    this.#templates = this.#parseTemplates();
    this.#populateFormChoices(this.#carData);
    this.#renderCars(this.#carData);
    this.#addOptionChangeEvent();
    this.#addFilterCarsEvent();
  }

  #parseTemplates() {
    let templates = {};
    let scripts = document.querySelectorAll("[type$=handlebars]")
    
    scripts.forEach(script => {
      templates[script.id] = Handlebars.compile(script.innerHTML);
      if (script.dataset['type'] === 'partial') {
        Handlebars.registerPartial(script.id, templates[script.id]);
      }
    });

    return templates;
  }

  #mapCarProperties() {
    return Object.keys(this.#carData[0]).filter(prop => prop !== 'image');
  }

  #addOptionChangeEvent() {
    this.#selects.forEach(select => {
      select.addEventListener('change', (event) => {
        let carsArray = this.#filterCarOptions();
        this.#populateFormChoices(carsArray);
      });

    });
  }

  #filterCarOptions() {
    let carsArray = this.#carData;
    this.#selects.forEach(option => {
      carsArray = this.#filterBy(carsArray, option.id, option.value)
    });
    return carsArray;
  }

  #filterBy(carsArray, field, value) {
    if (value === 'All' || value === 'Any') {
      return carsArray;
    }

    return carsArray.filter(car => String(car[field]) === value);
  }

  #populateFormChoices(carsArray) {
    this.#carProperties.forEach(property => {
      let allProperties = this.#addDefaultandFilterUniqueValues(carsArray, property);
      let select = document.querySelector(`#${property}`);
      let current = select.options[select.selectedIndex];
      select.innerHTML = this.#templates.filter_list({option: allProperties})
      if (current) {
        this.#selectCurrent(select, current.value);
      }
    });
  }

  #addDefaultandFilterUniqueValues(carsArray, property) {
    let defaultValue = this.#getDefaultOption(property);

    let filteredValues = [defaultValue];
    carsArray.forEach(car => {
      if (!filteredValues.includes(car[property])) {
        filteredValues.push(car[property]);
      }
    });

    return filteredValues;
  }

  #getDefaultOption(property) {
    if (property === 'make' || property === 'model') {
      return 'All';
    } else {
      return 'Any';
    }
  }

  #selectCurrent(selectElement, value) {
    for (let i = 0; i < selectElement.children.length; i += 1) {
      if (selectElement.children[i].value === value) {
        selectElement.children[i].selected = true;
      }
    }
  }

  #renderCars(carsArray) {
    let carDivs = this.#templates.many_cars({ cars: carsArray});
    document.querySelector('#cars').innerHTML = carDivs;
  }

  #addFilterCarsEvent() {
    document.querySelector('#filter_cars').addEventListener('submit', event => {
      event.preventDefault();
      let carsArray = this.#filterCarOptions();
      this.#renderCars(carsArray);
    });
  }
}

document.addEventListener('DOMContentLoaded', event => {
  new CarShop(cars);
});