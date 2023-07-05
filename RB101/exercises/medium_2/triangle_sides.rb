def triangle(s1, s2, s3)
  sides = [s1, s2, s3].sort
  return :invalid if sides[0..1].sum < sides[-1]
  return :invalid if sides.any?(0)
  if sides.all?(sides[0])
    :equilateral
  elsif sides.any? { |side| sides.count(side) == 2 }
    :isosceles
  else
    :scalene
  end
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid