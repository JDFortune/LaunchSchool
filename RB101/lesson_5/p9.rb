# given an array
# access each nested array of the array
# sort the elements of the nested arrays in descening order
# output the original array

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

def sort_inner(array)
  array.map do |inner_array|
    inner_array.sort do |a, b|
      b <=> a
    end
  end
end

p arr.object_id
p b = sort_inner(arr)
p arr
p b.object_id