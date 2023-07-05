class PerfectNumber
  def self.classify(num)
    raise StandardError if num < 0
    
    return 'perfect' if num == 1

    sum = sum_divisors(num)
    case sum <=> num
    when -1 then 'deficient'
    when 0  then 'perfect'
    when 1  then 'abundant'
    end
  end

  def self.sum_divisors(num)
    (1...num).each_with_object([]) do |n, arr|
      arr << n if num % n == 0
    end.sum
  end
end
