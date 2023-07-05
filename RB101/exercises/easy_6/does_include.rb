def include?(array, test)
  array.each do |element|
    return true if element == test
  end
  false
end

def include?(array, value)
  !!array.index(value)
end

def include?(array, value)
  array.any?(value)
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false