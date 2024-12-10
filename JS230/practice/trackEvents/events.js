let divRed = document.querySelector('div#red');
let divBlue = document.querySelector('div#blue');
let divOrange = document.querySelector('div#orange');
let divGreen = document.querySelector('div#green');

let tracker = function() {
  let events = [];

  return {
    add(event) {
      events.push(event);
    },
    list() {
      return events.slice();
    },
    elements() {
      return events.map(({target}) => target);
    },
    clear() {
      events = [];
      return events.length;
    },
  }
}();


function track(callback) {
  const isEventTracked = (event) => {
    return tracker.list().includes(event);
  }

  return function(event) {
    if (!isEventTracked(event)) {
      tracker.add(event);
    }

    callback(event);
  }
}

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));