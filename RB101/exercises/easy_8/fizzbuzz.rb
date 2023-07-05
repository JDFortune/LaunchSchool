# given a starting and ending number
# iterate from start to end

def fizzbuzzer(num)
  case
  when num % 15 == 0
    "FizzBuzz"
  when num % 5 == 0
    "Buzz"
  when num % 3 == 0
    "Fizz"
  else
    num
  end
end

def fizzbuzz(start, ender)
  result = []
  start.upto(ender) do |num|
    result << fizzbuzzer(num)
  end
  result
end

p fizzbuzz(1, 15) == [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']