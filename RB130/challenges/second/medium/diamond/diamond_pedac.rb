Notes:
  - given a letter (capital letter) create a diamond starting with outline starting at 'A' iterating to letter for middle and reversing

Rules:
  all layers are same width
  - all layers end with new line character
  - represented as one long string so that when puts, the new line characters do the work.
- width needs to be difference of letter A to given letter, time 2, plus 1

Methods:
  - make_diamond(letter)
    - letter represents center

Algorithm:
- find the `difference` between ordinal values of 'A' and letter.
- set the `width` to this value * 2 + 1
- create a array of `difference` size with elements of `width` length spaces.
- set first to difference
- set second to difference
- set start `letter` to 'A'
iterate over array
    set array indexs at first and second to `letter`
    subtract one from first
    add one to second
    reassign letter to next letter
append all but the last array values to the array in reverse order
join elements into string with "\n" character

