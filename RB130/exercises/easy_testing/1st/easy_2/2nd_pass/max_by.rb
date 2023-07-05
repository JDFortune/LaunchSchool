def max_by(collection, &block)
  return nil if collection.empty?
  max = collection.first
  collection[1..-1].each do |item|
    max = item if block.call(item) > block.call(max)
  end
  max
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]], &:size) == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 }.nil?
