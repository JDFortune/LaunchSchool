def is_prime?(num)
  (2...num).each do |mod|
    return false if num % mod == 0
  end
  true
end

def lower_prime(num)
  lower = num
  
  loop do
    return lower if is_prime?(lower)
    lower -= 1
  end
end

def higher_prime(num)
  higher = num + 1
  
  loop do
     return higher if is_prime?(higher)
    higher += 1
  end
end
    
def difference(high, low, num)
  high_diff = high - num
  low_diff = num - low

  high_diff <= low_diff ? (return high) : (return low)
end


def array_round_elements_nearest_prime(array)
  primes = []
  array.each do |el|
    higher = []

    lower = lower_prime(el)
    higher = higher_prime(el)
    prime = difference(higher, lower, el)
    
    primes << prime
  end
  primes
end

p array_round_elements_nearest_prime([5,7,9,11,12,13,20])
p array_round_elements_nearest_prime([2, 6, 18, 730, 7460, 7473,7870, 7874, 7875])