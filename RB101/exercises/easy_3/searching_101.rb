stage = %w(1st 2nd 3rd 4th 5th last)
numbers = []

stage.each do |position|
  puts "Enter the #{position} number:"
  numbers << gets.chomp.to_i
end

test = numbers.pop
status = numbers.include?(test) ? 'appears' : 'does no appear'

puts "The number #{test} #{status} in #{numbers}"