Notes:
 - Given an octal input string
  - convert to decimal

How_to_convert:
  - split number into digits each digit by (8 to the power of the digits location)--(sum the results)
    - digits location is based on 0 index from last number moving left adding 1 each time

Rule:
  Explicit:
    - treat invalid input as octal 0
    - implement the conversion myself

Emplimentation:


Methods:
  - intialize(octal_number_str)
    - save to @octal_num
  - to_decimal
  - invalid?
    - test @octal_num

Algorithms:
to_decimal
- return 0 if invalid number
- convert string number to integer
- split the string number into array of digits in reverse order
- iterate over array of digits, tracking index
  - transform each digit into d * (8 ^ idx)
- sum the returned array numbers
