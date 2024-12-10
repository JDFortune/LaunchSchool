function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(firstElement([1, 2]));
console.log(firstElement(['first']));
console.log(firstElement([]));