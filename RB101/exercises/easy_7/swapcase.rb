# input is a string of upper and lowercase letters
# output is a string with the letter cases swapped

# UPPERCASE
# LOWERCASE

# set count to -1
# while count is less than the strings size
#   add one to count
#   if a letter is lowercase
#     set letter to  uppercase
#   if a letter is uppercase 
#     set letter to lowercase
#   if not a letter
#     next

# return new string

UPPERCASE = ('A'..'Z').to_a
LOWERCASE = ('a'..'z').to_a

def swapcase(string)
  count = -1
  loop do 
    count += 1
    break if count >= string.size

    if LOWERCASE.include?(string[count])
      string[count] = string[count].upcase
    elsif UPPERCASE.include?(string[count])
      string[count] = string[count].downcase
    else
      next
    end

  end
  string
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'