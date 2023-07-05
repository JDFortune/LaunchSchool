def divisors(num)
  (1..Math.sqrt(num)).each_with_object([]) do |div, result|
    if num % div == 0
      result << div
      result << num / div
    end
  end.uniq.sort
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute
start = Time.now
p divisors(999962000357)
finish = Time.now

p finish - start