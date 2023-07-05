# create a counter at size - 1 of array
# set an empty array
# loop while counter is greater than or equal to 0
#   push array element at index counter to new array
#   counter - 1
# return new array

=begin
create an empty array
loop the number of times in the array
push push the current element of the array into the first position of the new array



=end

# def reverse(array)
#   new_array = []
#   counter = array.size - 1

#   while counter >= 0
#     new_array << array[counter]
#     counter -= 1
#   end

#   new_array
# end

# def reverse(array)
#   array.each_with_object([]) { |el, new_array| new_array.unshift(el)}
# end

def reverse(array)
  array.inject([], :unshift)
end

p reverse([1,2,3,4]) == [4,3,2,1]   
       # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true