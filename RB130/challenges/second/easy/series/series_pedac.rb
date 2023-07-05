Example
- string = "01234", digit series is 3
  outputs
    - 012
    - 123
    - 234
- string = "01234", digit series is 4
  outputs
    - 0123
    - 1234


Notes:
- Create new Series obj pass argument of string number
- return a nested array with numbers split and represented as individual digits in order of appearance
- take string of digits
- return all possible consecutive number series of specified length


Methods:
- initialize(str_number)
- slices(num)




Rules:
  Explicit: throw ArgumentError if series number is greater than string length
  Implicit:
    - when taking the series of numbers form string num, convert the series into an array of integer digits