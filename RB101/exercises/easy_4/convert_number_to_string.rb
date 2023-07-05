=begin
Write a method taking a positive integer and returns a string representation of that integer

input = integer
helper = hash
output = string

algorithm

take a number as integer
create a hash map of string characters correlting to interger numbers
chop each number off from last number to first number
  add the currently stripped to the start o fthe string\

return the string number

SET KEY_CONSTANT with integer keys and string number values
SET string_number = ''
until string number length == integer digits
  divide with remaind number by 10
  reasign dividend to number and remainder to KEY_CONSTANT value for integer
  add remainder to beginng of string_number

return strig number


############### signed number
get sign method
return string + or - if int is positive or negative
get number
if number > 0
  return a  '+'
elsif number < 0
  return a '-'
else
  return ''
=end
KEY = ('0'..'9').to_a

def get_sign(int)
  if int > 0
    return '+'
  elsif int < 0
    return '-'
  else
    return ''
  end
end

def signed_integer_to_string(int)
  sign = get_sign(int)
  int = int.abs
  string_num = ''
  
  loop do
    int, rem = int.divmod(10)
    string_num.prepend(KEY[rem])
    break if int == 0
  end
  sign + string_num
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'