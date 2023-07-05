def number?(number)
  number.to_i.to_s == number
end

def get_number
  loop do
    puts "Enter an integer greater than 0: "
    number = gets.chomp
    break number.to_i if number?(number)
    puts "not a valid integer."
  end
end

def get_operator
  loop do
    puts "Enter 's' to compute the sum, 'p' to compute the product\nof all integers between 1 and your chosen number: "
    operator = gets.chomp.downcase
    break operator if operator.start_with?('s') || operator.start_with?('p')
    puts "Not a valid operator."
  end
end

def calculate_result(numbers, operator)
  (operator == 's') ? numbers.sum : numbers.inject(:*)
end

def say_result(operator, number, result)
  operation = (operator == 's') ? 'sum' : 'product'

  puts "The #{operation} of the integers between 1 and #{number} is #{result}."
end

# Main Program
number = get_number
operator = get_operator

numbers = (1..number).to_a
result = calculate_result(numbers, operator)

say_result(operator, number, result)
