def valid_number(number)
  number.to_i.to_s == number.to_s
end

def calculate()
  loop do
    puts "enter a number"
    num1 = gets.chomp
    puts 'enter another number'
    num2 = gets.chomp

    if valid_number num1 && valid_number num2
      num1 = num1.to_i
      num2 = num2.to_i

      loop do
        puts "What operation would you like to perfom"
        operation = gets.chomp
        result = 0
        operator = ''

        case operation
        when 'add'
          result =  num1 + num2
          operator = '+'
        when 'subtract'
          result =  num1 - num2
          operator = '-'
        when 'multiply'
          result =  num1 * num2
          operator = 'x'
        when 'divide'
          result =  num1.to_f / num2
          operator = '/'
        else
          puts "not a valid operation."
          next
        end

        puts "#{num1} #{operator} #{num2} = #{result}"
        break
      end

    else
      puts "one or both of your numbers weren't valid"
      next
    end
    puts "care to go again? Y/N"
    recalculate = gets.chomp
    if recaltulate.upcase = 'Y'
      next
    else
      break
  end
end
      
puts calculate()
