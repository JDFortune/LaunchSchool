def one?(collection)
  true_count = 0
  collection.each do |el|
    true_count += 1 if yield(el)
    return false if true_count > 1
  end
  true_count == 1
end

def one?(collection)
  one_true = false
  collection.each do |el|
    next unless yield(el)
    return false if one_true
    one_true = true
  end
  one_true
end

p one?([1, 3, 5, 6]) { |value| value.even? }    == true
p one?([1, 3, 5, 7]) { |value| value.odd? }     == false
p one?([2, 4, 6, 8]) { |value| value.even? }    == false
p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p one?([1, 3, 5, 7]) { |value| true }           == false
p one?([1, 3, 5, 7]) { |value| false }          == false
p one?([]) { |value| true }                     == false