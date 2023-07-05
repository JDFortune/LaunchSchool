# # def triangle_right(int)
# #   int.times { |num| puts ('*' * (num + 1)).rjust(int) }
# # end

# # def triangle_left(int)
# #   int.times { |num| puts ('*' * (num + 1)).ljust(int) }
# # end

# # def down_triangle_right(int)
# #   num = int
# #   while num > 0
# #    puts ('*' * num).rjust(int)
# #    num -= 1
# #   end
# # end

# # def down_triangle_left(int)
# #   num = int
# #   while num > 0
# #    puts ('*' * num).ljust(int)
# #    num -= 1
# #   end
# # end

# # triangle_right(10)
# # puts ''
# # down_triangle_right(10)
# # puts ''
# # triangle_left(10)
# # puts ''
# # down_triangle_left(10)

# def triangle(num, base_corner = :bottom_right)
#   stars = Array.new(num) { |i| ("*" * (i + 1)).rjust(num) }

#   case base_corner
#   when :bottom_right  then puts stars
#   when :bottom_left   then puts stars.map(&:reverse)
#   when :top_left      then puts stars.map(&:reverse).reverse
#   when :top_right     then puts stars.reverse
#   end
# end

# triangle(10)
# triangle(10, :bottom_left)
# triangle(10, :top_left)
# triangle(10, :top_right)

# pairings = {'pizza' => 'soda', 'pasta' => 'wine', 'salad' => 'sparklingwater'}

# =begin
# Build Tower
# https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/ruby

# Build a pyramid-shaped tower given a positive integer representing the number of floors. A tower block is represented with "*" character.

# p build_tower(3) == [
#   "  *  ",
#   " *** ", 
#   "*****"
# ]
# p build_tower(6) == [
#   "     *     ", 
#   "    ***    ", 
#   "   *****   ", 
#   "  *******  ", 
#   " ********* ", 
#   "***********"
# ]
# =end

# get the integer
# set a emptyu array
# the integer number of times |num|
# multiply * by the num + 1 and pad the rest by the integer
#   push this into the array
# puts array

def build_tower(int)
  tower = []
  num = 1
  int.times do
    tower << ("*" * num).center((int*2)-1)
    num += 2
  end

  puts tower
end


build_tower(40)