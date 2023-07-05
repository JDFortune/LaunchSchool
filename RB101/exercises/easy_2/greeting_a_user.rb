=begin
puts "What is your name?"
name = gets.chomp

greeting = "Hello #{name}."
yeeting = "HELLO #{name[0...-1].upcase}. WHY ARE WE SCREAMING?"

puts name.include?('!') ? yeeting : greeting
=end
print 'What is your name? '
name = gets
name.chomp!

if name[-1] == '!'
  name.chop!
  puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING?"
else
  puts "Hello #{name}."
end