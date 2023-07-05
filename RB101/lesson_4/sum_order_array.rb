def consecutive_even_numbers_pyramid_row_array_sum(given_num)
  rows = []
  counter = 0

  while rows.length < given_num
    row = []
    while row.length < rows.length + 1
      counter += 2
      row << counter
    end
    rows << row
  end

  rows[given_num - 1].sum
end

puts "Enter a number: "
given_num = gets.chomp.to_i

p  consecutive_even_numbers_pyramid_row_array_sum(given_num)
    
=begin
Algorithm:
  keep algorithm abstracted and high level

-build a result array of with each element being an array of index + 1 length of consecutive even numbers starting with [2] at index 0
- return the sum of elements in array at given number - 1 index of result array

=end

 