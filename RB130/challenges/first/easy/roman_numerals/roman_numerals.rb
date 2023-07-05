# class RomanNumeral
#   ONES, FIVES = [['I', 'X', 'C', 'M'], ['V', 'L', 'D']]

#   def initialize(num)
#     @num = num
#   end

#   def to_roman
#     @num.digits.map.with_index do |int, idx|
#       case int
#       when 1..3 then  ONES[idx] * int
#       when 4    then  ONES[idx] + FIVES[idx]
#       when 5    then FIVES[idx]
#       when 6..8 then FIVES[idx] + (ONES[idx] * (int - 5))
#       when 9    then  ONES[idx] + ONES[idx + 1]
#       end
#     end.reverse.join
#   end
# end

