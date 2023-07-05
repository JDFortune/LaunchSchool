=begin
Problem
Method takes a positive integer and returns the sum of its digits

Implicit Rules:

Explicit Rules:
the given argument will be a positive integer


Data structures
input: integer
mid: array
output: integer

Algorithm
1. simple way, return a sum of the individual digits of the number.

2. turn number into a string and split into an array of characters. then iterate through the array turning the characters back into numbers. iterate through this array and add to a sum_variable. return the sum_variable

SET string = string of number
SET arr = array of string characters
SET sum = 0
for characters in arr
  turn character into integer
for each integer in arr
  add integer to sum
PRINT sum

=end

# def sum(num)
#   num.digits.sum
# end

# def sum(num)
#   string_array = num.to_s.split('')
#   sum_nums = 0
#   num_array =string_array.map(&:to_i)

#   num_array.each do |num|
#     sum_nums += num
#   end
#   sum_nums
# end

def sum(num)
  string_array = num.to_s.split('')
  sum = 0
  loop do
    break if string_array.empty?
    sum += string_array.shift.to_i
  end
  sum
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45
