def multiply(num1, num2)
  num1 * num2
end

def power_to_the_nth(num, n)
  return 1 if n == 0
  orig = num
  (n - 1).times do
    num = multiply(num, orig)
  end
  num
end

p power_to_the_nth(5, 3)
p power_to_the_nth(-8, 3)
p power_to_the_nth(10, 0)