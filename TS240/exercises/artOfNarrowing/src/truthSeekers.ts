function isStringArray(arg: unknown[]): arg is string[] {
  return arg.every(el => typeof el === 'string');
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));