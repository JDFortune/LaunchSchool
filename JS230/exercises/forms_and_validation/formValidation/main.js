let Validate = function() {
  let alertShown = false;

  return {
    focusOutEvent(form) {
      form.addEventListener('focusout', event => {
        if (event.target.tagName === 'INPUT') {
          if (!event.target.checkValidity()) {
            if (!alertShown)
              alert(`${event.target.dataset.id} is invalid`);
              alertShown = true;
          }
        }
      });
    },

    keypressEvent(form, ...selectors) {
      selectors.forEach(selector => {
        let inputs = form.querySelectorAll(selector);

        let pattern;
        if (inputs[0].parentNode.classList.contains('names')) {
          pattern = new RegExp(inputs[0].getAttribute('pattern'));
        } else {
          pattern = new RegExp("[\\d-]+");
        }

        inputs.forEach(input => {
          input.addEventListener('keypress', event => {
            event.preventDefault();
            let key = event.key;
            let valid = pattern.test(key);
            if (valid && input.value.length < input.getAttribute('maxlength')) {
              input.value += key;
            }

            if(input.id === 'phone' && [3, 7].includes(input.value.length)) {
              input.value += '-';
            } else if (valid && input.classList.contains('creditcard') && input.value.length === Number(input.getAttribute('maxlength'))) {
              let next = input.nextElementSibling;
              if (next) next.focus();
            }
          });
        });
      });
    },

    switchCardFieldEvent() {
      let cardFields = document.querySelectorAll('#cardDiv > :nth-child(-n+3)');
      
      cardFields.forEach(cardField => {
        cardField.addEventListener('keyup', event => {
          let field = event.currentTarget;
          let regex = new RegExp(field.getAttribute('pattern'));
          if (regex.test(field.value) && event.key !== 'Shift' && event.key !== 'Tab') {
            field.nextElementSibling.focus();
          }
        });
      });
    },

    focusInEvent(form) {
      form.addEventListener('focusin', event => {
        if (event.target.tagName === 'INPUT') {
          setTimeout(() => {
            alertShown = false;
          }, 1000);
        }
      });
    },


    sendData(form) {
      let data = new FormData(form);

      // let request = new XMLHttpRequest();
      // request.open('POST', form.action);
      // request.setRequestHeader('Content Type', 'application/x-www-form-urlencoded');

      // request.send(data);


      // request.onload = (event) => {
      //   alert('Form submitted');
        let serializedForm = document.querySelector('#serialized-form');
        console.log('serialized-form', serializedForm);
        const serializedData = {};
        for (let pair of data.entries()) {
          serializedData[pair[0]] = serializedData[pair[0]] || '';
          serializedData[pair[0]] += pair[1];
        }

        let queryParams = [];

        for (let key in serializedData) {
          queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(serializedData[key])}`);
        }

        let p = document.createElement('p');
        p.textContent = queryParams.join('&');
        serializedForm.appendChild(p);
        
      // }

      // request.onerror = (event) => {
      //   alert('Error: ' + event.message);
      // }
    },

    submitEvent(form) {
      form.addEventListener('submit', event => {
        event.preventDefault();

        let inputs = form.querySelectorAll('input');
        let message = [];
        
        for (let i = 0; i < inputs.length; i++) {
          let input = inputs[i];

          if (!input.checkValidity()) {
            if (message.length === 0) message.push('The following inputs are incorrect');
            message.push(`${message.length}. ${input.dataset.id}`);
            input.placeholder = input.value;
            input.value = '';
          }
        }

        if (message.length > 0) {
          alert(message.join("\n"));
        } else {
          this.sendData(form)
          form.reset();
        }
      })
    },

    bindEvents() {
      let form = document.querySelector('form');
      this.focusOutEvent(form);
      this.submitEvent(form);
      this.focusInEvent(form);
      this.keypressEvent(form, 'div.names input', 'div.number input');
      this.switchCardFieldEvent();
    },
  }

}();


document.addEventListener('DOMContentLoaded', () => {
  Validate.bindEvents();
});