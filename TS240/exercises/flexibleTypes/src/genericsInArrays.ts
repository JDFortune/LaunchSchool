function filterByType<T>(arr: any[], type: T): T[] {
  return arr.filter(el => typeof el === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"));
