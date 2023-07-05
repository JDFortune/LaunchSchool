e = Enumerator.new do |x|
  num = 0
  factorial = 1
  loop do
    x << factorial
    num += 1
    factorial *= num
  end
end

p e.take(7)
p e.take(7)


# p e.take(100)