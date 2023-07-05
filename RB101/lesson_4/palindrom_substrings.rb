=begin
PEDAC

Problem
  Given a string return a array of the strings substrings, if the substrings are palindromes. 

  Break up a string into all variations of substrings and return any substrings that are palindromes. palindromes are case sensitive.

  inputs = string
  mid = array of strings
  output = revised array of strings
questions:
  1. will input always be a string? yes
rules:
  exlicit: 
    1. palindromes requirements are case-sensitive
    2. return only substrings which are palindromes
  
  implicit:
    1. group palindromic substrings into an array of strings.

Algorithm:

palindrom_substrings method
=============================
  - initialize a result variable to an empty array

  - create an array of substrings that contains all of the substrings of the input string.
        - for each starting index, from 0 through the next to last index position
          - for each substring length from 2 until there are no substrings of that length
            - extract the substring of the indicated length starting at the indicated index position.
          - end of inner loop
        - end of outer loop
        
  - loop through substrings array
    - if any substrings are palindromes
      - push into results array
  - return the result array


substring method
=================================
- create an empty array called 'result' that will contain all required stubstrings
- create a 'starting_index' variable (value `0`) for the starting index of a substring
- start a loop taht iterates over 'starting_index' from '0' to the length of the string minus 2
  - create a 'num_chars' variable (value '2') for the length of the substring
  - start an inner loop that iterates over 'num_chars' from '2' to 'string.lengths - starting_index'
    - extract a substring of length 'num_cahrs' from 'string' starting at 'starting_index'
    - append the extracted substring to the 'result' array
    - increment the 'num_chars' variable by '1'
  - end the inner loop
  - increment the starting_index' variable by '1'
- end the outer loop
- return the 'result' array

START 

  /* Given a string named 'string' */

  SET result = []
  SET starting_index = 0

  WHILE starting_index <= length of string - 2
    SET num_chars = 2
    WHILE num_chars <= length of string - starting_index
      SET substring = num_chars characters from string starting at starting_index
      append substring to result array
      SET num_chars += 1
     
    SET startind_index += 1
  
  RETURN result

END


palindrom method
==================
# take in a string
# check if the string is equal to the reverse of the string
# return true or false

=end
def is_palindrom(substr)
  substr == substr.reverse
end

def substring(string)
  result = []
  starting_index = 0

  while starting_index <= string.length - 2
    num_chars = 2
    while num_chars <= string.length - starting_index
      substring = string[starting_index, num_chars]
      result << substring
      num_chars += 1
    end
    starting_index += 1
  end

  result
end

def palindrome_substrings(string)
  result = []
  substrings = substring(string)
  
  substrings.select { |substring| is_palindrom(substring) }
end


p palindrome_substrings("supercalifragilisticexpialidocious") == ["ili"]
p palindrome_substrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
p palindrome_substrings("palindrome") == []
p palindrome_substrings("") == []