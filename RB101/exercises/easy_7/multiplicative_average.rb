=begin
given an array of numbers. you need to multiply each number in the array and then divide by the total number of integers in the array. then return the value with 3 decimal places

data:
input: array of integers
output: float with 3 decimal places

questions:
will the array ever be empty? yes
Will it ever be an array of negative numbers or non-integers? No

algorithm
set a result varialbe to 1.0
iterate through array
  mutliply each number by the result variable and store in result
divdive by the total number of ints in the array

return result formated to 3 decimal places
=end

def show_multiplicative_average(array)
  "The result is #{format('%.3f', array.inject(:*).to_f / array.size)}"
end


p show_multiplicative_average([3, 5]) #== 7.500
p show_multiplicative_average([6]) #== 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) #== 28361.667