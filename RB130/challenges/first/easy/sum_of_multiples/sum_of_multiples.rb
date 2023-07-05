class SumOfMultiples
  def initialize(*mults)
    @mults = mults
  end

  def to(num)
    (1...num).select { |n| @mults.any? {|mult| (n % mult).zero? } }.sum
  end

  def self.to(num)
    self.new(3, 5).to(num)
  end
end
