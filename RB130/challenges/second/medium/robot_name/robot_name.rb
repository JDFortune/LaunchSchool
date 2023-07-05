class Robot
  @@names = []

  def initialize
    @name = name
  end

  def name
    @name ||= generate_name
  end

  def generate_name
    temp = nil
    while temp.nil? || @@names.include?(temp)
      temp = ''
      2.times { temp << ('A'..'Z').to_a.sample }
      3.times { temp << (0..9).to_a.sample.to_s }
    end
    @@names << temp
    temp
  end

  def reset
    @@names.delete(@name)
    @name = nil
  end
end
