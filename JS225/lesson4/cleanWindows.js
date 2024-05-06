const greeter = {
  message: (() => {
    let name = 'Naveed';
    let greeting = 'Hello';

    return `${greeting} ${name}!`
  })(),

  sayGreetings() {
    console.log(this.message);
  }
};

greeter.sayGreetings();