let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}


function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

greetPeople();
changeGreetingMessage("Good Evening!");
greetPeople();