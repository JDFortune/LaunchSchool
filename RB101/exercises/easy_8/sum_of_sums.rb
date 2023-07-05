# method takes an array of integers and returns the sum of the sum of each integer and its preceding integers

# create a counter at 0
# iterate through the array for the number of elements in the array
#   iterate through the elements with the index
#     if the index is less than the counter
#       throw the element into the result array
#     else
#       add one to counter
#       break out of this iteration

# return the sum of the result array

# def sum_of_sums(array)
#   result = []
#   counter = 0
#   array.size.times do
#     array.each_with_index do |num, idx|
#       if idx <= counter
#         result << num
#       else
#         counter += 1
#         break
#       end
#     end
#   end

#   result.sum
# end

def sum_of_sums(array)
  sum_total = 0
  1.upto(array.size) do |count|
    sum_total += array[0, count].sum
  end
  sum_total
end

p sum_of_sums([3, 5, 2]) #== (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) #== (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) #== 4
p sum_of_sums([1, 2, 3, 4, 5]) #== 35