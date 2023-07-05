def divisors(number)
  num = Math.sqrt(number).to_i
  1.upto(num).each_with_object([]) do |n , result|
    if number % n == 0
      result << n
      result << number / n
    end
  end.uniq.sort
end

pp divisors(1) == [1]
pp divisors(7) == [1, 7]
pp divisors(9)
pp divisors(12) == [1, 2, 3, 4, 6, 12]
pp divisors(98) == [1, 2, 7, 14, 49, 98]
pp divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute