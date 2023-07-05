=begin
take in a string and get ascii value for each characters
return the sum of those values

take a string
split them individual characters
map out characters into their ascii value equivalents
  - retrun ord
return the sum of the characters
=end

# def ascii_value(string)
#   string_char = string.chars
#   string_char.map do |chr|
#     chr.ord
#   end.sum
# end

def ascii_value(string)
  return 0 if string == ''
  string.chars.map(&:ord).inject(:+)
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0
