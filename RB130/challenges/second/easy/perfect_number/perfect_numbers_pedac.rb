Notes:
  abundant, perfect, deficient
  - based on sum of numbers positive divisors.
  - Perfect numbers have aliquot sum that is equal to the original number.
  - Deficitent numbers have an aliquot sum less than the original number.
  - Abundant, aliquot sum is greater than original number.

Problem:
 Write a program that returns whether a number is perfect, abundant, or deficient

input: number (integer)
intermediate: array of positive divisors
output: string (category of number p, a, d)

Rules:
  Implicit:
    - use positive divisors up to but not including the original number
    - negative number inputs should rais an StandardError
Question:
- is 1 considered a perfect number?

Methods:
  class methods:
    - classify(num)
      - takes number and returns string category
    
  class helper method:
    - get divisors

Algortithms:
`classify(num)`
raise StandardError if num is less than 1
return 'perfect' if num is 1
set sum equal to return of `sum_divisors(num)`
if sum less than num
  return 'deficient'
if sum greater than num
  return 'abundant'
else
  return 'perfect'



`sum_divisors(num)`
set a `result` empty array
iterate from 1 up to number (not including)
  push current test number into `result` if  number is evenly divisible by test
return sum of `result` array


