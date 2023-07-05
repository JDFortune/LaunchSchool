=begin
have a counter at 0
pop the last element from the array and insert into position at counter
add one to counter
break when counter == array size
=end

# def reverse!(list)
#   return list if list.empty?
#   counter = 0
#   loop do
#     list.insert(counter, list.pop)
#     counter += 1
#     break if counter == list.size
#   end
#   list
# end

def reverse!(list)
  list.size.times { |i| list.insert(i, list.pop) }
  
  list
end

# def reverse!(list)
#   left_index = 0
#   right_index = -1

#   while left_index < list.size / 2
#     list[left_index], list[right_index] = list[right_index], list[left_index]
#     left_index += 1
#     right_index -= 1
#   end

#   list
# end

list = [1,2,3,4]
result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true