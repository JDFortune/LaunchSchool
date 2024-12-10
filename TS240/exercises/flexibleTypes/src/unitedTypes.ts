function wrapInArray<T extends string | number>(arg: T): T[] {
  return [arg];
}

wrapInArray('1');