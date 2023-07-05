=begin
def oddities(array)
  array.select.with_index { |_, idx| idx.even? }
end

def eveneties(array)
  array.select.with_index { |_, idx| idx.odd? }
end
=end

=begin
Two other ways:
1. iterate through the elements with a counter and push odd indexes to a new array

2. iterate through with an on and off switch and that pushes and stops pushing on iterations 
=end

def oddities2(array)
  add = true
  result_array = []
  array.each do |el|
    result_array.push(el) if add
    add = (add == true ? false : true)
  end
  result_array
end

=begin
SET new_array = []
SET index = 0
WHILE index less than to length of the array
  push odd indexes into the new_array (based off the index)
RETURN new_array
=end

def oddities3(array)
  new_array = []
  index = 0
  while index < array.length
    new_array.push(array[index])
    index += 2
  end
  new_array
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []