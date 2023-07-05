=begin
featured number 
  - odd number
  - multiple of 7
  - digits only occur once each


starting with the given number
iterate through numbers and break once a number meets the critera for a featured number

=end

def featured(num)
  start = num + 1
  start += 1 until start.odd? && start % 7 == 0

  loop do
    num_chars = start.to_s.split('')
    return start if num_chars.uniq == num_chars
    start += 14
    break if start >= 9_876_543_210
  end
  'There is no possible number that fulfills those requirements'
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements