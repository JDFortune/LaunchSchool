def count(*collection)
  result = 0
  collection.each { |item| result += 1 if yield(item) }
  result
end

p count(1, 3, 6, &:odd?) == 2
p count(1, 3, 6, &:even?) == 1
p count(1, 3, 6) { |value| value > 6 } == 0
p count(1, 3, 6) { true } == 3
p count() { true } == 0
p count(1, 3, 6) { |value| value - 6 } == 3
