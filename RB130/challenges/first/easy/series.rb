class Series
  attr_reader :num

  def initialize(num)
    @num = num
  end

  def slices(length)
    raise ArgumentError if length > num.size
    (0..num.size - length).each_with_object([]) do |idx, series|
      series << num[idx, length].chars.map(&:to_i)
    end
  end
end