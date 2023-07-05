# # take a string
# # create a new string where consonants are doubled

# # break string into characters
# # is char a vowel
# #   if so return chr once
# #   else return chr twice

# #   return string
# CONSONANTS = ('a'..'z').to_a - %w(a e i o u)

# def double_consonants(string)
#   string.chars.map do |chr|
#     CONSONANTS.include?(chr.downcase) ? chr * 2 : chr
#   end.join
# end


# p double_consonants('String') == "SSttrrinngg"
# p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# p double_consonants("July 4th") == "JJullyy 4tthh"
# p double_consonants('') == ""
CONSONANTS = ('a'..'z').to_a - %w(a e i o u)

def double_consonants(string)
  result = ''
  string.chars do |char|
    result << (CONSONANTS.include?(char.downcase) ? (char * 2) : char)
  end
  result
end

# p repeater('Hello') == "HHeelllloo"
# p repeater("Good job!") == "GGoooodd  jjoobb!!"
# p repeater('') == ''

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""