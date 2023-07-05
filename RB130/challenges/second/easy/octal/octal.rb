class Octal
  def initialize(str)
    @octal_num = str
  end

  def to_decimal
    return 0 if invalid?

    octal_digits = @octal_num.to_i.digits

    octal_digits.map.with_index do |digit, idx|
      digit * (8**idx)
    end.sum
  end

  private

  def invalid?
    @octal_num.match(/[a-z89]/i)
  end
end
