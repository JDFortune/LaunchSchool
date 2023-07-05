# get all substrings of a string and return them in an array of shortest to longest

# get a result array = []
# iterator starting at 0 to string length
#   push into result the string from index 0 to length

# return result array

# def leading_substrings(string)
#   result = []
#   (1..string.length).each do |count|
#     result << string[0,count]
#   end
#   result
# end

def leading_substrings(string)
  string.chars.each_index.with_object([]) { |index, array| array << string[0..index] }
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']