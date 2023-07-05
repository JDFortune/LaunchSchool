# def fibonacci_last(nth)
#   fib = [0,1]
#   return nth if nth < 2
#   until fib.size > nth
#     fib << fib.last(2).sum
#   end
#   fib.last.digits.first
# end

# p fibonacci(20) == 6765
# p fibonacci(100) == 354224848179261915075
# p fibonacci(100_001) # => 4202692702.....8285979669707537501


# def fibonacci_last(nth)
#   first, last = [1,1]
#   return 1 if nth < 2
#   3.upto(nth) do
#     first, last = [last, first + last]
#   end
#   last.digits.first
# end


# # p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
# # p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
# # p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
# # p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# # p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# # p fibonacci_last(123456789) # -> 4


# def fibonacci_find_last(n)
#   num = 100_001
#   n -= num
#   array = []
#   60.times do
#     array << fibonacci_last(num)
#     num += 1
#   end

#   array *= n

#   array[n].digits.first
# end


# def fibonacci_last(nth)
#   # define the last digit of the first two values
#   fib_01_last = 1
#   fib_02_last = 1

#   # calculate the last digit of each value in sequence
#   n = 0
#   fib_n_last = 0
#   loop do
#     n = n + 1
#     if n == 1  # last digit at fib(1)
#       fib_n_last = fib_01_last
#     elsif n == 2  # last digit at fib(2)
#       fib_n_last = fib_02_last
#     else  # last digit at fib(n)
#       fib_n_last = (fib_01_last + fib_02_last) % 10
#       fib_01_last, fib_02_last = fib_02_last, fib_n_last
#     end
#     return fib_n_last if n == nth
#   end
# end

# p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
# p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
# # p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
# # p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# p fibonacci_last(123456789) # -> 4

# def fibonacci_last(nth)
#   first, last = [1, 1]

#   n_last = 0
#   count = 0
#   until count == nth
#     count += 1
#     if count == 1
#       n_last = first
#     elsif count == 2
#       n_last = last
#     else
#       n_last = (first + last ) % 10
#       first, last = [last, n_last]
#     end
#   end
#   n_last
# end

# def fibonacci_last(nth)
#   first, last = [1, 1]
#   3.upto(nth) do
#     first, last = [last, first + last]
#   end
#   last % 10
# end

# p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
# p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
# p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
# p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# p fibonacci_last(123456789) # -> 4

# def fibonacci_last(nth)
#   fibs = [1, 1]
#   nth %= 60

#   until fibs.size == 60
#     fibs << fibs.last(2).sum
#   end

#   fibs.map! do |num|
#     num % 10
#   end

#   fibs[nth - 1]
# end

# p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
# p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
# p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
# p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
# p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
# p fibonacci_last(123456789) # -> 4

def repeating?(array)
  half = array.size / 2
  array[0, half] == array[half..] 
end

def get_repeating_fibs_sequence()
  fibs = [1, 1]
  fibs_last = fibs.clone

  loop do
    fibs << fibs[-2, 2].sum
    fibs_last << fibs.last % 10
    break if repeating?(fibs_last)
  end

  fibs_last[0, (fibs_last.size / 2)]
end

def fibonacci_last(nth)
  fibs_repeating = get_repeating_fibs_sequence
  nth %= fibs_repeating.size
  fibs_repeating[nth - 1]
end

start = Time.now
p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
p fibonacci_last(123456789) # -> 4
finish = Time.now
puts (finish - start).to_s + " seconds"