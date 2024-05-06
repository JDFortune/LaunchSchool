function getName() {
  let firstName = prompt('What is your first name?');
  let lastName = prompt('What is your last name?');

  
  console.log(`Good Morning, ${firstName} ${lastName}!`);
}

getName();

// let add = (a, b) => a + b;
// let getNumber = (text) => {
//   let input = prompt(text);
//   return Number(input);
// };

// let number1 = getNumber("Enter a number: ");
// let number2 = getNumber("enter another number: ");

// console.log(add(number1, number2));