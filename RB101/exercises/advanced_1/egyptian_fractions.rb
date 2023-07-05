# rational method takean argument and returns an array of denominators that are part of an egyptian fraction, representation of the number.

# other method takes an array of numbers in the same format and calculates the resulting rational numbers



def unegyption(denominators)
  Rational(
  denominators.map! do |deno|
    1.0 / deno
  end.sum)
end

# start with a rational number and iterate through every potential number
# set a denominator array
# set unit_denominator to 1

# until rational == 0
#   current_fraction = (Rational(1 , unit_denominator))
#   rational -= current_fraction

#   denominator



# def egyptian(rational)
#   denominators = []
#   current_denominator = 1
  
#   until rational == 0
#     current_fraction = Rational(1 , current_denominator)
#       if current_fraction <= rational
#         rational -= current_fraction
#         denominators << current_fraction.denominator
#       end
#       current_denominator += 1
#   end

#   denominators
# end
# create denominator variable to store data
# have initial denominator set to 1

# create a loop that breaks if the target number is reduced to 0
#   set current_fraction to the return of Rational(1/denominator)
#   if the target_number is > than the current_fraction
#     subtract current_fraction from target
#     push the denominator into the array of denominators
  
#     add one to denominator
#     break if denominator is 0
# return the denominators

def egyptian(rational)
  denominators = []
  denom = 1

  loop do
    break if rational == denominators.sum
    fraction = Rational(1, denom)

    if denominators.sum + fraction <= rational
      denominators << fraction
    end
    denom += 1
  end
  denominators.map(&:denominator)
end



def unegyptian(denominators)
  denominators.map do |deno|
    Rational(1, deno)
  end.sum
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
p egyptian(Rational(127, 130))

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
p unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
p unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
p unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
p unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
p unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
p unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
p unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)