=begin
Problem
  Given an integer, write a program that creates a string with alternating 1s and 0s.
  The string always starts with 1.

explici rules
  even indexes are 1
  odd indexes are 0
  the length of the string is equal to the given integer.
  input will be an integer

Data Structures
input: integer
output: string

Algorithm:

1. Start with an empty string. Alternate pushing 1s and 0s into string for given integer length. output string.

2. using an empty array, push 1s and 0s into an array depending on even and odd index locations. output the array,combined into a string.
=end

# Solution 1
def stringy(num)
  string = ''
  letter_num = '1'
  num.times do
    string << letter_num
    letter_num = 
      letter_num == '1' ? '0' : '1'
  end
  string
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
puts stringy(0) == ''

## Solution 2
# def array_stringy(num)
#   string_array = Array.new(num)

#   string_array.each_index do |idx|
#     string_array[idx] = idx.even? ? '1' : '0'
#   end

#   string_array.join
# end

# puts array_stringy(6) == '101010'
# puts array_stringy(9) == '101010101'
# puts array_stringy(4) == '1010'
# puts array_stringy(7) == '1010101'
# puts array_stringy(0) == ''