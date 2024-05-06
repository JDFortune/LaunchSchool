function shortLongShort(str1, str2) {
  strings = [str1, str2]
  // strings.sort((string1, string2) => string1.length - string2.length);
  strings.sort((a, b) => a.length - b.length);
  
  let short;
  let long;
  [short, long] = strings;

  console.log(short + long + short);
  
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"