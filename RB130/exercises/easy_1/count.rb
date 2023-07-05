def count(collection)
  count = 0
  for value in collection
    count += 1 if yield(value)
  end
  count
end

def count(collection)
  collection.reduce(0) {|sum, el| yield(el) ? sum + 1 : sum }
end

p count([1,2,3,4,5]) { |value| value.odd? } == 3
p count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count([1,2,3,4,5]) { |value| true } == 5
p count([1,2,3,4,5]) { |value| false } == 0
p count([]) { |value| value.even? } == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2