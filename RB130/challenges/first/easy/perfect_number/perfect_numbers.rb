class PerfectNumber
  def self.classify(num)
    divs = get_divisibles(num) 
    case divs.sum <=> num
    when -1 then 'deficient'
    when 0  then 'perfect'
    when 1  then 'abundant'
    end
  end

  def self.get_divisibles(num)
    divs = [1]
    2.upto(Math.sqrt(num)) do |n|
      if num % n == 0
        divs << n
        divs << num / n
      end
    end
    divs
  end
end
