class Calculator {
  constructor() {
    this.equationField = document.querySelector('#equation');
    this.entryField = document.querySelector('#entry');
    this.result = 0;
    this.operation = null;
  }

  getEntry() {
    return Number(this.entryField.textContent);
  }

  emptyEquationReset() {
    if (this.equationField.textContent === '') {
      this.result = this.getEntry();
      this.resetEntry = true;
    }
  }

  evaluate(symbol) {
    if (symbol === '=') {
      this.equal();
    } else {
      this.emptyEquationReset();
      this.appendEquation(this.getEntry(), symbol);
      if (this.operation) this.getResult();
      this.operation = symbol;
    }
  }

  appendEquation(value, operation) {
    this.equationField.textContent += `${value} ${operation} `
  }

  setEntry(value) {
    this.entryField.textContent = String(value);
  }

  clearEquation() {
    this.equationField.textContent = '';
  }

  clearEntry() {
    this.setEntry(0);
  }

  clearAll() {
    this.result = 0;
    this.clearEntry();
    this.clearEquation();
  }

  negative() {
    if (!this.entryField.textContent.includes('-')) {
      this.entryField.textContent = '-' + this.entryField.textContent;
    }
  }

  decimal() {
    if (!this.entryField.textContent.includes('.')){
      this.entryField.textContent += '.';
    }
  }

  appendEntry(digit) {
    if (this.entryField.textContent === '0' || this.resetEntry) {
      this.setEntry(digit);
    } else {
      this.entryField.textContent += digit;
    }
    this.resetEntry = false;
  }

  equal() {
    this.clearEquation();
    this.getResult();
    this.operation = null;
  }

  getResult() {
    switch (this.operation) {
      case '+':
        this.result += this.getEntry();
        break;
      case '-':
        this.result -= this.getEntry();
        break;
      case '/':
        this.result /= this.getEntry();
        break;
      case 'x':
        this.result *= this.getEntry();
        break;
      case '%':
        this.result %= this.getEntry();
        break;
      case '=':
        this.equal();
        break;
    }
    this.setEntry(this.result);
    this.resetEntry = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calc = new Calculator();
  this.calculator = calc;

  document.querySelector('table').addEventListener('click', event => {
    if (event.target.tagName === 'TD') {
      switch(event.target.dataset.id) {
        case 'clear':
          if (event.target.id === 'clear-entry') {
            calc.clearEntry();
          } else if (event.target.id === 'clear-all') {
            calc.clearAll();
          }
          break;
        case 'digit':
          calc.appendEntry(event.target.id);
          break;
        case 'operation':
          calc.evaluate(event.target.textContent);
          break;
        case 'decimal':
          calc.decimal();
          break;
        case 'negative':
          calc.negative();
          break;
      }
    }
  });
});