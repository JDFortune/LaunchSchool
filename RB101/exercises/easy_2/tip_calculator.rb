puts "What is the bill?"
bill = gets.chomp.to_f

puts "What is the percentage?"
percentage = gets.chomp.to_f / 100

tip = (bill * percentage)
total = (bill + tip)

puts "The tip is #{format("$%0.2f", tip)}"
puts "The total is #{format("$%0.2f", total)}"