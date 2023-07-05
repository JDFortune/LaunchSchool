def sum_square_difference(num)
  num_arr = (1..num).to_a
  sum_square = num_arr.sum ** 2
  square_sum = num_arr.map { |num| num ** 2 }.sum
  sum_square - square_sum
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150