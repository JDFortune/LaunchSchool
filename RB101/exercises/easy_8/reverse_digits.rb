# take an integer return reverse
# set result = 0
# get the dividend and remander of dividing number by 10
# results = (result * 10) + remainder

# return result

# def reversed_number(integer)
#   result = 0
#   while integer > 0 do
#   integer, rem = integer.divmod(10)
#     result = (result * 10) + rem
#   end
#   result
# end

# def reverse_number(int)
#   int.to_s.reverse.to_i
# end

def reversed_number(int)
  int.digits.join.to_i
end

p reversed_number(12345) == 54321
p reversed_number(12213) == 31221
p reversed_number(456) == 654
p reversed_number(12000) == 21 # No leading zeros in return value!
p reversed_number(12003) == 30021
p reversed_number(1) == 1