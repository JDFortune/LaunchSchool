def rotate_array(array)
  array[1..-1] + [array[0]]
end

# p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
# p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
# p rotate_array(['a']) == ['a']

# x = [1, 2, 3, 4]
# p rotate_array(x) == [2, 3, 4, 1]   # => true
# x == [1, 2, 3, 4]                 # => true

# def rotate_array(array)
#   array[1..-1] + [array[0]]
# end

# def rotate_string(string)
#   string[1..-1] + string[0]
# end

# def rotate_integers(integer)
#   rotate_string(integer.to_s).to_i
# end

# # def rotate_integers(integer)
# #   split_integer = integer.digits
# #   new_num = 0
# #   first = split_integer.pop

# #   until split_integer.empty?
# #     new_num = (new_num * 10) + split_integer.pop
# #   end
# #   new_num = (new_num * 10) + first
# # end

# p rotate_string('hello')

# p rotate_integers(1234)

# def rotate_rightmost_digits(number, position)
#   num_string = number.to_s.chars
#   num_string[-position..-1] = rotate_array(num_string[-position..-1])
#   num_string.join.to_i
# end

# p rotate_rightmost_digits(735291, 1) == 735291
# p rotate_rightmost_digits(735291, 2) == 735219
# p rotate_rightmost_digits(735291, 3) == 735912
# p rotate_rightmost_digits(735291, 4) == 732915
# p rotate_rightmost_digits(735291, 5) == 752913
# p rotate_rightmost_digits(735291, 6) == 352917

# counter and while iterating through counter to the number of digits we have
# we take the number at counter and move to the back

# def max_rotation(number)
#   num_digits = number.to_s.size

#   num_digits.downto(2) do |position|
#     number = rotate_rightmost_digits(number, position)
#   end

#   number
# end

def max_rotation(number)
  num_starr = number.to_s

  counter = 0
  while counter < num_starr.size
    current_num = num_starr[counter]
    num_starr[counter] = ''
    num_starr << current_num
    counter += 1
  end
  
  num_starr.to_i
end

convert to a string and then array of characters
with a counter at 0


def max_rotation(number)

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845