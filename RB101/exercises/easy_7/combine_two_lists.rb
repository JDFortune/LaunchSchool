=begin

combine two arrays by interleaving their elements

vreate an empty array
create a counter
while new array doesn't contain both of the last elements of the two arrays
 add element of first array at index counter
 add element of second array at index counter
 add 1 to counter

return the new array




# this method accounts for the arrays being different sizes, but not for the case where the last element of an array is a repeated value.
def interleave(array_1, array_2)
  result = []
  count = 0
  until result.include?(array_1.last) && result.include?(array_2.last)
    result << array_1[count]
    result << array_2[count]
    count += 1
  end

  result
end

def interleave(array_1, array_2)
  array_1.zip(array_2).flatten
end

=end


def interleave(array_1, array_2)
 array_1.each.with_index.with_object([]) do
  |(element, idx), array| array << element << array_2[idx]
 end
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']