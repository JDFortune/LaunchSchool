# if both conditions are true return false
# if both conditions are false return false
# if one condition is true return true

# def xor?(condition1, condition2)
#   return false unless condition1 == true && condition2 == false ||
#                       condition1 == false && condition2 == true
#   true
# end

def xor?(condition1, condition2)
  return true unless condition1 == condition2
  false
end

p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false