
def negative(num)
  -num.abs
end

neg_time = Time.now
p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0      # There's no such thing as -0 in ruby
neg_end = Time.now
puts "#{neg_end - neg_time} seconds for absolute"


def negative(number)
  number > 0 ? -number : number
end 

neg_time = Time.now
p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0      # There's no such thing as -0 in ruby
neg_end = Time.now

puts "#{neg_end - neg_time} seconds for ternary"