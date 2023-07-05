class Series
  def initialize(num)
    @num = num
  end

  def slices(n)
    raise ArgumentError if n > @num.size
    result = []
    (0..@num.size - n).each do |idx|
      result << @num[idx, n].chars.map(&:to_i)
    end
    result
  end

end

a = Series.new("1234")

p a.slices(2)

