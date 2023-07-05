module Enumerable
  def print_values
    self.each do |el1, el2|
      p yield(el1, el2)
    end
  end
end

hash = {one:1, two:2, three:3}
arr = [1, 2, 3]

pp Hash.new.public_methods(true).sort