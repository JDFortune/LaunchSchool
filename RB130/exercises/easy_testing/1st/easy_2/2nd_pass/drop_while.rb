def drop_while(collection)
  collection.each_with_index do |el, idx|
    return collection[idx..-1] if !yield(el)
  end
  []
end

p drop_while([1, 3, 5, 6], &:odd?) == [6]
p drop_while([1, 3, 5, 6], &:even?) == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { true } == []
p drop_while([1, 3, 5, 6]) { false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { true } == []
