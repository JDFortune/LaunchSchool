# given two arrays. Combine the two arrays in a sorted order and return as a single array or sorted elements

# Rules:
# cannot sort the array
#   - must build the result array one element at a time in proper order
# cannot mutate the input arrays
# the two arrays are already sorted

# input: two arrays of integers
# output: merged and sorted array

# Algorithm:
# 1. create an empty array and identifying the current lowest number in either array that is not currently in the result array, count the occurences of the number in either array push those numbers into the next array and move to the next number. When all of the numbers are in the result array return.

# 2. track the indexes for both arrays. at current index, compare the two elements. if element at arr1_idx is less than arr2_idx, push arr1_idx element into array and increase arr1_idx by 1. Do the same for arr2_idx in the opposite instance. repeated until arr1_idx or arr2_idx is == to the size of associated array at which point replace fill the result array with any remaining digits.
# We'll do all of this untill the reuslts array is equal to the size fo the two combined arrays.



# Given two input arrays
# set an empty result array
# set arr1_idx to 0
# set arr2_idx to 0
# until the result array is the size of the two arrays
#   if arr1idx isn't equal to arr1 size and arr2idx != to arr2 size
#     if current arr1 element is less than array2 element
#       push arr1 element into result array
#       add 1 to arr1_idx
#     elsif arr2 element is less than array 1 element
#       push arr2 element into result array
#       add 1 to arr2_idx
#     else
#       push arr1 element and arr2 element into results
#       add 1 to both idx
#     end
#   elsif arr1 is less than array1 size and arr 2 is == arr2size
#     push arr1 element into result
#     add 1 to arr1 idx
#   else
#     push arr2 element into result
#     add 1 to arr2 idx
#   end
# end
# return the results array

# def add_element(array, index)

# end

# def merge(arr1, arr2)
#   result = []
#   idx1= 0
#   idx2 = 0
#   until result.size == arr1.size + arr2.size
#     if idx1 < arr1.size && idx2 < arr2.size
#       if arr1[idx1] < arr2[idx2]
#         result << arr1[idx1]
#         idx1 += 1
#       elsif arr2[idx2] < arr1[idx1]
#         result << arr2[idx2]
#         idx2 += 1
#       else
#         result << arr1[idx1]
#         result << arr2[idx2]
#         idx1 += 1
#         idx2 += 1
#       end
#     elsif idx1 < arr1.size && idx2 == arr2.size
#       result << arr1[idx1]
#       idx1 += 1
#     else
#       result << arr2[idx2]
#       idx2 += 1
#     end
#   end
#   result
# end

def merge(arr1, arr2)
  result = []
  arr1_dup = arr1.dup
  arr2_dup = arr2.dup
  until result.size == arr1.size + arr2.size
    if !arr1_dup.empty? && !arr2_dup.empty?
      if arr1_dup.first < arr2_dup.first
        result << arr1_dup.shift
      else
        result << arr2_dup.shift
      end
    elsif arr1_dup.empty?
      result << arr2_dup.shift
    else
      result << arr1_dup.shift
    end
  end
  result
end 

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]