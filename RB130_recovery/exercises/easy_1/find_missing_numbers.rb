def missing(array)
  (array.first..array.last).each_with_object([]) do |num, result|
    result << num if !array.include?(num)
  end
end

def missing(array)
  result = []
  array.first.upto(array.last) do |num|
    result << num if !array.include?(num)
  end
  result
end

def missing(array)
  (array.first..array.last).to_a - array
end


p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []