class Robot
  NAME_LETTER = [*('A'..'Z')]
  NAME_NUMBER = [*('0'..'9')]

  @@names = []

  def reset
    @@names.delete(@name)
    @name = nil
  end

  def name
    return @name if @name
    @name = generate_name while @@names.include?(temp_name) || @name.nil?
    @@names << @name
    @name
  end


  private

  def generate_name
    temp = ''
    2.times {temp << NAME_LETTER.sample}
    3.times {temp << NAME_NUMBER.sample}
    temp
  end
end