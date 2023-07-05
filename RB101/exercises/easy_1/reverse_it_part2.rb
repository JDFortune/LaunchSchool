=begin

Problem
Given a string, reverse any words that contain 5 or more characters.

implicit
won't receieve an empty string
words will stay in same order in sentence


explicit
each string will consist of only letters and spaces
spaces should be included only when more than one word is present
reverse words with 5 or more characters

Data Structures
input: string
mid: array
output: string

Algorithm

1. split words into separate elements. if the word is greater than 5 characters, reverse it.
print out the new string.

=end

def reverse_words(string)
  string_array =
    string.split.map { |word| word.size >= 5 ? word.reverse : word }

  string_array.join(' ') 
end

puts reverse_words('Professional')          == 'lanoisseforP'
puts reverse_words('Walk around the block') == 'Walk dnuora the kcolb'
puts reverse_words('Launch School')         == 'hcnuaL loohcS'