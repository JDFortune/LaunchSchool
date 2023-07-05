# within a loop 
# check the size of the current


# p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
# p merge_sort([5, 3]) == [3, 5]
# p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
# p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
# p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# Rule:
# uses recurssion

# Notes:
# probably need 3 conditions
# - if the numbers are out of order, when need to go further into the array nesting.
#     - this will require recurssion
# - if the numbers are nested and in order we need to come out of the nesting, while sorting.
#     - this will include recurssion
# - if the numbers are sorted and not nested, we return the array.

# 2. the iterating method that accesses the individual elements will have to use the recurssion. to determine the next step. probably map it to so that the return becomes the root of the next step in recurrsion

# def merge(arr1, arr2)
#   result = []
#   arr1_dup = arr1.dup
#   arr2_dup = arr2.dup
#   until result.size == arr1.size + arr2.size
#     if !arr1_dup.empty? && !arr2_dup.empty?
#       if arr1_dup.first < arr2_dup.first
#         result << arr1_dup.shift
#       else
#         result << arr2_dup.shift
#       end
#     elsif arr1_dup.empty?
#       result << arr2_dup.shift
#     else
#       result << arr1_dup.shift
#     end
#   end
#   result
# end 

def merge(arr1, arr2)
  index2 = 0
  result = []

  arr1.each do |value|
    while index2 < arr2.size && arr2[index2] <= value
      result << arr2[index2]
      index2 += 1
    end
    result << value
  end
  result.concat(arr2[index2..-1])
end

def merge_sort(array)
  if array.size == 1
    array
  else
    half = (array.size / 2.0).round
    left, right = array.each_slice(half).to_a

    left = merge_sort(left)
    right = merge_sort(right)

    merge(left, right)
  end
end 

p merge_sort([5,4,3,2,1])


p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# def fibonacci(n)
#   if n < 2
#     n
#   else
#     fibonacci(n - 1) + fibonacci(n - 2)
#   end
# end
