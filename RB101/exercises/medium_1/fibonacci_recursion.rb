# def fibonacci(n)
#   if n < 2
#     n
#   else
#     fibonacci(n - 1) + fibonacci(n - 2)
#   end
# end

# p fibonacci(1) == 1
# p fibonacci(2) == 1
# p fibonacci(3) == 2
# p fibonacci(4) == 3
# p fibonacci(5) == 5
# p fibonacci(12) == 144
# p fibonacci(20) == 6765
# p fibonacci(60)

def fibonacci(n)
  fib = [0,1]
  return fib[n] if n < 2
  until fib.size > n
    fib << fib[-2..-1].sum
  end
  fib[-1]
end

p fibonacci(1) == 1
p fibonacci(2) == 1
p fibonacci(3) == 2
p fibonacci(4) == 3
p fibonacci(5) == 5
p fibonacci(12) == 144
p fibonacci(20) == 6765
p fibonacci(60)