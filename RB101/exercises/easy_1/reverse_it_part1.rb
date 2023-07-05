=begin
Problem
  Given a string, return the string with the words reverse order, but spelled forward. If the string is empty or filled with only spaces, return an empty string.

  explicit
  - return an empty string if the string is empty.

Questions:
If there are spaces surrounding the string do I get rid of those? (yes)

Data Structures
input: string
mid: array
output: string

Algorithm:

1. Take in a string and strip it of extra spaces. If the string is only spaces return an empty string. separate the words into individual strings. Reverse the order of the elements and return the string with the words in reverse order.

READ given_string
SET given_string = string with excess spaces removed
PRINT empty string if the string is empty
SET given_string to array of individual words
PRINT reverse of the array of strings, combined back into one string
=end

def reverse_sentence(sentence)
  #sentence.strip!
  #return sentence if sentence.empty? || sentence.nil?

  sentence.split.reverse.join(' ')
end

puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == '' #