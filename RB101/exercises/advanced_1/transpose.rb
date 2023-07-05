# def transpose(matrix)
#   matrix_reloaded = matrix.map { Array.new }

#   matrix.map! do |array|
#     array.each_with_index do |element, idx|
#       matrix_reloaded[idx] << element
#     end
#   end

#   matrix_reloaded
# end
   
# matrix = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# p transpose(matrix)

# p matrix

# create a hash that stores the data and its location [row][column]
# store as [row, column], then reverse the inputs to [column, row] and reassign element to [column][row]

# iterate over matrix rows with index
#   iterate over row elements as columns
#     push element into a hash with a value of [column, row]
# iterate through the hash with element and assignment location
#   access the original matrix assign matrix at [column][row]
#                       ie. matrix[asslo[0]][asslo[1]] = element

# def transpose!(matrix)
#   reference_chart = {}
#   matrix.each_with_index do |row, row_idx|
#     row.each_with_index do |element, column_idx|
#       reference_chart[element] = [column_idx, row_idx]
#     end
#   end
  
#   reference_chart.each do |element, (row, column)|
#     matrix[row][column] = element
#   end

#   matrix
# end

# matrix = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# p matrix

# p transpose!(matrix)

# p matrix

def transpose(matrix)
  matrix_reloaded = matrix[0].map { Array.new }

  matrix.each do |array|
    array.each_with_index do |element, idx|
      matrix_reloaded[idx] << element
    end
  end

  matrix_reloaded
end
   
p transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
  [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
p transpose([[1]]) == [[1]]

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

p matrix
p transpose(matrix)
