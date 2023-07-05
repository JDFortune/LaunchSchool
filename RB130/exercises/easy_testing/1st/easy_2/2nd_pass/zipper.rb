def zip(collection1, collection2)
  collection1.map.with_index do |val1, idx|
    [val1, collection2[idx]]
  end
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]