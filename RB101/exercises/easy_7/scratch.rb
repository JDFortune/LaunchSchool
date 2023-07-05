# # given an array, sort the array by the frequency of numbers

# # get a hash with the numbers as keys and their frequency as values
# # sort the hash according to their frequency value
# # create an array with the keys in their sorted position
# # iterate through the sorted key array
# #   for the given number
# #     set a variable to the value of the key number in the hash
# #     while the variable is greater than zero
# #       push the number into the empty hash
# #       subtract one from the variable
# #     end
# #   end

# #   return the new array


# def solve(array)
#   result = []
#   chart = array.sort.tally
#   chart = chart.sort { |(a, b), (c, d)| d <=> b }#.to_h
#   order = chart.keys

#   # chart.each do |arr|
#   #   while arr[1] > 0
#   #     result << arr[0]
#   #     arr[1] -= 1
#   #   end
#   # end

#   result
#   order.each do |num|
#     count = chart[num]
#     while count > 0
#       result << num
#       count -= 1
#     end
#   end

#   result
# end


# def solve(arr)
#   arr.sort!
#   arr.sort do |n1, n2|
#     arr.count(n2) <=> arr.count(n1)
#   end
# end

# p solve([2,3,5,3,7,9,5,3,7]) == [3,3,3,5,5,7,7,2,9]

# p solve([1,2,3,0,5,0,1,6,8,8,6,9,1]) == [1,1,1,0,0,6,6,8,8,2,3,5,9]

# p solve([5,9,6,9,6,5,9,9,4,4]) == [9,9,9,9,4,4,5,5,6,6]

# given an integer (n)
# create an array of array and output the sum of the last array element within the result array

# set an array with n elements of [1]

# set res array
# while the size of the array is less than the n
#   set temp array []
#   if temp array is empty
#     push in integer 1
#   else if res array size is 0
#     push temp array into res array
#   else
    


# arr = [['1', '8', '11'], ['2', '6', '13'], ['2', '12', '15'], ['1', '8', '9']]

# arr.sort_by! do |sub|
#   sub.map do |num|
#     num.to_i
#   end
# end

# p arr

