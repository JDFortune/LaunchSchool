=begin
testing the angles of a triangle to return type of triangle

Rules:
1. angles add up to 180
2. no angles can be 0
3. Types
  - Right - one angle equals 90
  - Acute - all angles less than 90
  - Obtuse - one angle greater than 90

=end

def triangle(a1, a2, a3)
  angles = [a1, a2, a3]
  return :invalid if angles.any?(0) || angles.sum != 180

  if angles.any?(90)
    :right
  elsif angles.all? { |a| a < 90 }
    :acute
  elsif angles.any? { |a| a > 90 }
    :obtuse
  else
    :invalid
  end
end

def triangle(a1, a2, a3)
  angles = [a1, a2, a3]
  return :invalid if angles.any?(0) || angles.sum != 180

  test = angles.select { |a| a >= 90 }[0]
  return :acute if test.nil?
  case test > 90
  when true then :obtuse
  else
    :right
  end
end

def triangle(a1, a2, a3)
  angles = [a1, a2, a3]
  return :invalid if angles.any?(0) || angles.sum != 180

  test = angles.select { |a| a >= 90 }[0]

  case 
  when test.nil?
    :acute
  when test > 90
    :obtuse
  when test == 90
    :right
  end
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid