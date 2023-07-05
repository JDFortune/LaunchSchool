class Octal
  def initialize(octal)
    @octal = octal.match?(/[a-z89]/i) ? 0 : octal.to_i
  end

  def to_decimal
    @octal.digits.map.with_index { |digit, idx| digit * (8 ** idx) }.sum
  end 
end