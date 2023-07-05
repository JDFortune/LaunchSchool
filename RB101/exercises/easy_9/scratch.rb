# sort an array of arrays by the value of their even indexes

# access the nested array elements of the array
# sort by the number values of the even indexs of the arrays

array = [[3, 2, 5], [1, 2, 3], [2, 3, 1] , [1, 3, 2]]

p(
array.sort do |arr1, arr2|
  arr1 = arr1.select.with_index do |element, idx|
    idx.even?
  end

  arr2 = arr2.select.with_index do |element, idx|
    idx.even?
  end

  arr1 <=> arr2
end
)