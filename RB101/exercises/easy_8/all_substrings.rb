# grab all substrings and return in a new array of substrings

# set result to empty array
# start an iterator at position 0
#   set second iterator to 1
#   while second iterator is <= string size - first iterator
#     push the string from first iterator for second iterator letters into results array
#     add one to second iterator
#   add one to first iterator
# return result array

def leading_substrings(string)
  string.chars.each_index.with_object([]) { |index, array| array << string[0..index] }
end

# def substrings(string)
#   result = []
#   0.upto(string.size - 1) do |pos|
#     iterator = 1
#     while iterator <= string.size - pos
#       result << string[pos, iterator]
#       iterator += 1
#     end
#   end
#   result
# end

def substrings(string)
  result = []
  0.upto(string.size) do |index|
    current_string = string[index..-1]
    result << leading_substrings(current_string)
  end
  result.flatten
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]