# def rotate90(matrix)
#   matrix_reloaded = matrix[0].map { Array.new }
  
#   matrix.each do |array|
#     array.each_with_index do |element, idx|
#       matrix_reloaded[idx] << element
#     end
#   end
  
#   matrix_reloaded.map(&:reverse)
# end

#   matrix1 = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# matrix2 = [
#   [3, 7, 4, 2],
#   [5, 1, 0, 8]
# ]

# new_matrix1 = rotate90(matrix1)
# new_matrix2 = rotate90(matrix2)
# new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

# p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
# p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
# p new_matrix3 == matrix2

def rotate(matrix, rotation)
  (rotation/90).times do
    matrix_reloaded = matrix[0].map { Array.new }
    
    matrix.each do |array|
      array.each_with_index do |element, idx|
        matrix_reloaded[idx] << element
      end
    end
    
    matrix_reloaded.map!(&:reverse)
    matrix = matrix_reloaded
  end
  matrix
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

p rotate(matrix1, 270)