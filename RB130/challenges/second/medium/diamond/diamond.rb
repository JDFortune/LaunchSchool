# frozen_string_literal: false

# Creates a diamond
class Diamond
  def self.make_diamond(letter)
    return "A\n" if letter == 'A'

    layers = create_variables(letter)
    create_layers(layers)
    "#{layers.join("\n")}\n"
  end

  def self.create_variables(letter)
    @diff = (letter.ord - 'A'.ord)
    @width = @diff * 2 + 1
    @first = @diff
    @second = @diff
    @letter = 'A'
    Array.new(@diff + 1).map { ' ' * @width }
  end

  def self.create_layers(layers)
    layers.each do |layer|
      layer[@first] = @letter
      layer[@second] = @letter
      increment
    end

    layers << layers[0...-1].reverse
  end

  def self.increment
    @first -= 1
    @second += 1
    @letter.next!
  end
end
