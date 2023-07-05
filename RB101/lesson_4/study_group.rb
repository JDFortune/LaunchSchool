# There's a bunch of numbers and another number and we need to see if the placement of numbers from the bunch of numbers can be added to result in the other number.

# given an array_of_numbers and an other_number
# see if the sum of the array numbers is equal to the other_number
# if so return true


# Test Examples:

# [1, 2, 3], 6 => true
# [3, 5, 9], 17 => true
# [1, 2, 3], 7 => false

def get_sub_arrays(array)
  sub_array = []

  array.each_with_index do |num,idx|
    position = idx + 1
    while position < array.size
      sub_array << [num, array[position]]
      position += 1
    end
  end

  sub_array
end


def two_sum(array, target_num)
  final_array = []
  sub_arrays = get_sub_arrays(array)
  array_match = sub_arrays.select { |x| x.sum == target_num }[0]
  
  array.each_with_index do |num, index|
    if num == array_match[0]
      final_array << index
      array_match.shift
    end
  end
  
  final_array
end

# def two_sum(arr, target)
#   sub_arrays = []
#   arr.each_with_index do |elem, idx|  #gives a collection of all two element sub_arrys.
#     idx2 = 1
#     loop do
#       break if idx2 == arr.size
#       sub_arrays << [elem, arr[idx2]]
#       idx2 += 1
#     end 
#   end

#   target_sub_array = []
#   sub_arrays.each do |sub_arr| 
#     if sub_arr.sum == target
#       target_sub_array << sub_arr
#     end 
#     target_sub_array.flatten!
#   end 

#   answer = []
#   arr.each_with_index do |elem, idx|
#     if target_sub_array.include?(elem)
#       answer << idx
#     end  
#   end
#   answer
# end
  

p two_sum([2, 11, 7, 15], 9) #== [0, 2]
p two_sum([3, 2, 4], 6) #== [1, 2]
p two_sum([3, 3], 6) #  == [0, 1]