# You wake up at the control board of a submarine. In front of you is a panel of buttons and a note left by the previous captain: "Use the buttons to set the ship's depth, and aim for as close to n leagues as possible -- but definitely don't go higher! You can select only one set of buttons, and *together* they determine the depth. Here's the last course I set: 2. And I was aiming to be higher than 7.

# The buttons in front of you are as follows:
# 2
# 3
# 1
# 2
# 4
# 3

# PROBLEM
# Given a number (n) for leagues and an array of numbers (arr), find the sum a subarray of numbers that is as close to n as possible without going over.


# INPUT integer and array of integers
# OUTPUT no thank you

# RULES: Don't press number of buttons that add up to more than given number (n)


# EXAMPLES


# High Level algorithms
# get every sub_array of numberse
# return a new array with all sub arrays that were closest to the given number

# def get_subs(array)
#   sub_arrays = []
#   0.upto(array.size - 1) do |idx|
#     count = 1
#     until count > (array.size - idx)
#       sub_arrays << array[idx, count]
#       count += 1
#     end
#   end
#   sub_arrays
# end

# a =  get_subs([2, 3, 1, 2, 4, 3])
# def minSubLength(buttons, depth)
#   sub_buttons = get_subs(buttons)
#   possible_sequence = sub_buttons.select do |string_of_buttons|
#                         string_of_buttons.sum >= depth
#                       end
  
#   possible_sequence.sort_by! do |sequence|
#     sequence.length
#   end
#   possible_sequence.empty? ? 0 : possible_sequence[0].size
# end

def get_subs(array)
  0.upto(array.size).with_object([]) do |idx, sub_arrays|
    count = 1
    until count > (array.size - idx)
      sub_arrays << array[idx, count]
      count += 1
    end
  end
end

def minSubLength(buttons, depth)
  sub_buttons = get_subs(buttons)
  possible_sequence = sub_buttons.select do |string_of_buttons|
                        string_of_buttons.sum >= depth
                      end
                      
  possible_sequence.sort_by! do |sequence|
    sequence.length
  end
  possible_sequence.empty? ? 0 : possible_sequence[0].size
end


p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
p minSubLength([1, 10, 5, 2, 7], 9) == 1
p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
p minSubLength([1, 2, 4], 8) == 0

# iterate through subarrays
# find the shortest length of num for subarrays that are higher than the depth number


# # if any subarrays sums are higher than the given number throw them into result array
# # iterate through result array select array that has the highest lowest sum

# get subarray of button sequences
#   iterate 'start' from 0 to one less than array size
#       have a iterating counter set to 1
#         while counter is less or equal to the array.size - 'start'
#           push array at 'start' index for counter length to subarrays array
#           add one to counter
# return subarrays


# # select subarrays who's sum adds up to or is equal to depth
#       iterate through subarrays
#         select any subarrays whose sum is greater tahn or equal to depth
# # sort the array of button sequences by the length of the sequences
#       sort the return of selection iteration by the size of the sub_arrays
# # return the shortest sequence of number's size
#   if the selected sub_arrays is empty
#     return 0
#   else
#     return the size of the sub_array at index 0

