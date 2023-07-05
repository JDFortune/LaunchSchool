def number?(num)
  num.to_i.to_s == num ||
  num.to_f.to_s == num ||
  num.to_i.to_s + '.' == num ||
  num.to_f.to_s + '0' == num
end 

num1 = ''
loop do
  puts "Enter the first number:"
  num1 = gets.chomp
  if number?(num1)
    break num1 = num1.include?('.') ? num1.to_f : num1.to_i
  end
  puts "Invalid entry"
end

num2 = ''
loop do
  puts "Enter the second number (can't be 0):"
  num2 = gets.chomp
  if number?(num2)
    num2 = num2.include?('.') ? num2.to_f : num2.to_i
    break num2 if num2 != 0
  end
  puts "Invalid entry"
end

operations = %w(+ - * / % **)

operations.each do |op|
  result = num1.send(op, num2)
  puts "==> #{num1} #{op} #{num2} = #{result}"
end
