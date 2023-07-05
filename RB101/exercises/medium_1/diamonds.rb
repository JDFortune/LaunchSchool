# given an integer
# create a diamond with number of rows equal to the integer

# rules
#  1. at its widest, the number of stars will be equal to the given integer
#  2. number of stars will start at one, each row will add 2 stars
#  3. given integer will always be odd
#  4. middle row will be the widest (see rule 1)
#  5. after middle row is determined, reduce number of stars by 2 until final row, where stars will be one

#  GIVEN integer for star size
#  starting with one star, add 2 stars to output (centerd by star_size) until stars_count is equal to star_size
#  subtract 2 from star count for output until stars equals 1
#  output stars and end program

#  SET diamond empty array
#  SET star_size
#  SET star_count to 1

#  Until star_count is equal to star_size
#   add '*' * star_count centered to star_size to diamond array
#   add 2 to star count
# create another loop
#   add '*' * star_count centered to star_size to diamond array
#   break if star_count is 1
#   subtract 2 from star_count
# end

# puts diamond

# def diamond(star_size)
#   diamond = []
#   star_count = 1

#   until star_count == star_size
#     diamond << ('*' * star_count).center(star_size)
#     star_count += 2
#   end

#   loop do
#     diamond << ('*' * star_count).center(star_size)
#     break if star_count == 1
#     star_count -= 2
#   end

#   puts diamond
# end

# diamond(1)

# diamond(7)

# diamond(9)

# create a star_count variable = "**"
# create a space_between equal to 1
# center based on star_size
# SET diamond to empty array

# top half
#   push into diamond add one star centered by star size
#   create a loop
#     push into diamond "**".insert(1, " " * space_between) centered by star_size
#     break if space_between equals star_size - 2
#     space_between += 2
# bottom half
#     push into diamond all elements from index 0 to 2nd to last element in reverse order

def further_diamond(star_size)
  return puts '*' if star_size == 1
  space_between = 1
  diamond = []

  diamond << '*'.center(star_size)
  loop do
    diamond << '**'.insert(1, ' ' * space_between).center(star_size)
    space_between += 2
    break if space_between == star_size
  end

  diamond << diamond[0...-1].reverse

  p diamond
end

further_diamond(1)

further_diamond(5)

further_diamond(9)
