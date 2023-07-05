# input a string of characters
# output is a hash with 3 keys 'lowercase' 'uppercase' 'neither'
#   the keys values correspond to the count of existing lowercase characters, uppercase, and anything else

# create two constanst with all lowercase letters all uppercase letters

# set count hash = to a new hash with default values at 0

# break string into characters and iterate through
#   for each character
#     if the character is in lowercase constant
#       add one to the lowercase key
#     if uppercase
#       add to uppercase key
#     else
#       add to neither key
#     end
# return count hash

# LOWERCASE = ('a'..'z').to_a.join
# UPPERCASE = ('A'..'Z').to_a.join

# def letter_case_count(string)
#   count = {lowercase: 0, uppercase: 0, neither: 0}

#   string.chars.each do |chr|
#     if LOWERCASE.include?(chr)
#       count[:lowercase] += 1
#     elsif UPPERCASE.include?(chr)
#       count[:uppercase] += 1
#     else
#       count[:neither] += 1
#     end
#   end

#   count
# end

def letter_case_count(string)
  count = {}
  string = string.chars
  count[:lowercase] = string.count { |char| char =~ /[a-z]/ }
  count[:uppercase] = string.count { |char| char =~ /[A-Z]/ }
  count[:neither] = string.count { |char| char =~ /[^a-zA-Z]/ }

  count
end


p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }