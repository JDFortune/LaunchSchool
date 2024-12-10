function shortcut(arg?: string): void {
  arg && console.log("Input is defined and not empty");
}

console.log(shortcut(''));
console.log(shortcut());
shortcut('hello');