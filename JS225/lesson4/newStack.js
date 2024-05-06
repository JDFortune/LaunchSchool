function makeStack() {
  const stack = [];
  
  return {
    push(item) {
      stack.push(item);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(item => console.log(item));
    },
  }
}

let myStack = makeStack();

myStack.push(4);
myStack.push(5);

myStack.printStack();
console.log('');
myStack.pop();

myStack.printStack();