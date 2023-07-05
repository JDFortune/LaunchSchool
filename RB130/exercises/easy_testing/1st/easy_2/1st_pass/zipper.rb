def zip(arr1, arr2)
  arr1.map.with_index { |el, idx| [el, arr2[idx]] }
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]
p zip([1, 2, 3], [4, 5, 6, 7])
p zip([1, 2, 3, 4], [5, 6, 7])


# how would I sort an array based on order of appearance in two arrays.