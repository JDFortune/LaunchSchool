
# given 2 arrays
# multiply each element in the first array to every element in the second array
# return the new array sorted smallest number to largest

# def multiply_all_pairs(arr1, arr2)
#   result = []
#   arr1.each do |num1|
#     arr2.each do |num2|
#       result << num2 * num1
#     end 
#   end
#   result.sort
# end

# p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]


def multiply_all_pairs(arr1, arr2)
  arr1.product(arr2).map { |sub| sub.inject(:*) }.sort
end


p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]