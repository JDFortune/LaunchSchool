function printLength(arg: string | string[]): void {
  if (typeof arg === 'string') {
    console.log(`String length: ${arg.length}.`);
  } else {
    console.log(`Array count: ${arg.length}.`);
  }
}