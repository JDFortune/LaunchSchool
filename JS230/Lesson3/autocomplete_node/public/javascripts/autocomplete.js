import { debounce } from './debounce.js';

const AutocompletePrototype = {
  wrapInput: function() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },

  createUI: function() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.cliendWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  },

  valueChanged: function() {
    let value = this.input.value;
    this.previousValue = value;
    
    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  },
  
  fetchMatches: function(value, callback) {
    let xhr = new XMLHttpRequest();
    
    xhr.onload = () => callback(xhr.response);
    
    xhr.open('GET', this.url + encodeURIComponent(value));
    xhr.responseType = 'json';
    xhr.send();
    
  },
  
  draw: function() {
    while (this.listUI.lastChild) {
      this.listUI.removeChild(this.listUI.lastChild);
    }
    
    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }
    
    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }
    
    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');
      
      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }

      li.textContent = match.name;
      this.listUI.appendChild(li);
    });
  },

  generateOverlayContent(value, match) {
    let end = match.name.slice(value.length);
    return value + end;
  },
  
  reset: function() {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;
    
    this.draw();
  },

  handleKeydown: function(event) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'Tab':
        if (this.matches.length !== 0 && this.bestMatchIndex !== null) {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;
      case 'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;
      case 'Enter':
        this.reset();
        break;
    }
  },

  handleMousedown: function(event) {
    let element = event.target;

    this.input.value = element.textContent;
    this.reset();
  },
  
  bindEvents: function() {
    this.input.addEventListener('input', this.valueChanged);
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
    this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
  },
}

function Autocomplete(url, inputElement) {
  this.input = inputElement;
  this.url = url;

  this.listUI = null;
  this.overlay = null;

  this.wrapInput();
  this.createUI();

  this.valueChanged = debounce(this.valueChanged.bind(this), 300);

  this.bindEvents();
  
  this.reset();
}

Autocomplete.prototype = AutocompletePrototype;

document.addEventListener('DOMContentLoaded', () => {
  // Autocomplete.init();

  let inputEl = document.querySelector('input');
  let autocomplete = new Autocomplete('/countries?matching=', inputEl);
});