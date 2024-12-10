interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const obj: KeyValuePair<string, number> = {
  key: 'hello',
  value: 27,
}