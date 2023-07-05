=begin
Write a method that takes two strings as arguments, determines the longest of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Problem
Given two strings of different lengths. return a concatenation of the two string with the shorter string printed in front of and behind the longer string.

Explicit rules:
will receive two data types as strings
strings will be of different lengths

Implicit
Strings can be empty


Data Structure
input 2 strings
output 1 string


Algorithm
determin the lengths of the strings and using the shorter string, i'll print shorter longer shorter string as a  single string

SET shorter string equal to shorter string
  IF string 1 length is less than string 2
    short string = string 1
    long string = string 2
  ELSE
    short = string 2
    long = stringe 1
SET longer String to longer string
PRINT short + long + short
=end

def short_long_short(string1, string2)
  string1.length < string2.length ?
    string1 + string2 + string1 :
    string2 + string1 + string2
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"