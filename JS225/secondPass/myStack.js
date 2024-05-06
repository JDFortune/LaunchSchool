function myStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(value => console.log(value));
    }
  }
}