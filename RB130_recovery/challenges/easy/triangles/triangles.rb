# write a program to determine whether a triangle is equilateral, isosceles, or scalene

# Rule:
#   To be a triangle, the sum of and two sides must be greater than the third side

# we are creating a triangle class that takes 3 arguments, as side lengths
# in order for it to be a true triangle, we need to test that
#   1. the sum of any two sides is greater than the third side
# if that passes
#   we need to test for what type of triangle it is
#     -equilateral (all sides are the same length)
#     - isocceles (two sides are the same length)
#     - scalene (no sides are the same length)

# to find the kind of triangle
# I need to test the sides

class Triangle
  def initialize(s1, s2, s3)
    @sides = [s1, s2, s3]
    @types = ['scalene', 'equilateral', 'isosceles']
    raise ArgumentError unless triangle?
  end

  def kind
    types.each do |type|
      return type if send type
    end
  end

  private

  attr_reader :sides, :types

  def scalene
    sides.none? { |side| sides.count(side) > 1 }
  end

  def equilateral
    sides.count(sides[0]) == 3
  end

  def isosceles
    sides.any? {|side| sides.count(side) == 2 }
  end

  def triangle?
    return false if sides.any? {|side| side <= 0}
    sides.each do |side|
      temp = sides.dup
      temp.delete_at(temp.index(side))
      two_sides = temp
      return false if two_sides.sum <= side
    end
    true
  end
end