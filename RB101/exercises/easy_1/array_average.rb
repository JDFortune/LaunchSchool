=begin
Problem
Given an array of numbers, return the average of the numbers.

Explicit

Algorith
  Sum the numbers and divide by length of index
=end

def average(arr)
  if arr.sum/arr.length.to_f % 2 == 0
    arr.sum/arr.length
  else
    (arr.sum.to_f/arr.length).round(2)
  end

end

puts average([1, 6]) == 3.50 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25.67
puts average([9, 47, 23, 95, 16, 52]) == 40.33
puts average([1,2,3,4,6]) == 3.20
puts average([1,2,3,4]) == 2.50
puts average([1,3]) == 2


=begin
add numbers indivudually while iterating through the array
divide by the length of the array.
=end