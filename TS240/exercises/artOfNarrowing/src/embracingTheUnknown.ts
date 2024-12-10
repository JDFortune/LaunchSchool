function logUnknown(arg: unknown): void {
  if (typeof arg === 'string') console.log(arg);
}