=begin
Write a method that takes an Array of numbers, and returns an Array with the same number of elements, and each element has the running total from the original Array.

implicit:
array of integers?

input: array of integers
output: array of integers with elements being the sum of previous elements

algorithm
1. set an empty array. set a save_num. then iterate through an array of numbers. have save_num store the value of the sum of previous iterations and push the save_num's sum to a new array with each iteration

SET empty array
SET sum_num = 0
for each elemen in the array
  set the sum_num = sum_num + current_num
  push sum_num  into the empty array

PRINT new array

=end

# def running_total(array)
#   new_array = []
#   sum_num = 0
  
#   array.each do |num|
#     sum_num += num
#     new_array << sum_num
#   end

#   new_array
# end

# p running_total([2, 5, 13]) == [2, 7, 20]
# p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# p running_total([3]) == [3]
# p running_total([]) == []

=begin

=end

# def running_total2(array)
#   sum = 0
#   array.each_with_object([]) do |element, object| 
#     object << (sum += element)
#   end
# end
  
# p running_total2([2, 5, 13]) == [2, 7, 20]
# p running_total2([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# p running_total2([3]) == [3]
# p running_total2([]) == []

def running_total3(array)
  new_array = []
  array.inject(0) { |el, sum| new_array[new_array.length] = sum + el }
  new_array
end





p running_total3([2, 5, 13]) == [2, 7, 20]
p running_total3([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total3([3]) == [3]
p running_total3([]) == []