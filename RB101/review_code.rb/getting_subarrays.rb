
#### GET ALL TWO ELEMENT SUB ARRAYS FROM AN ARRAY OF NUMBERS
# call each with an object on an array of numbers with index (with object [] passed as argument) |(element, idx), sub_arrays|
#   set second_el from 1 + index to last element
#   until second_el variable is the size of the caller array
#     push to sub_arrays obj an array with element and array[second_el]
#     second_el increment by 1
# return sub_arrays with only uniq arrays


a = [1, 2, 3, 4, 3, 5]
def two_element_subarrays(a)
  a.each_with_index.with_object([]) do |(element, idx), sub_arrays|
    second_element = idx + 1
    until second_element == a.size
      sub_arrays << [element, a[second_element]]
      second_element += 1
    end
  end.uniq
end


###### GET ALL RANGE SUBARRAY POSSIBILITIES
# sub array of ranges

# each with object and index
# range variable set to 1
# until the range == array.size - (index + 1)
#   push array[idx, range] to results array
#   increment range by 1

#   return object
def all_ranges_subarrays(a)
  a.size.times.with_object([]) do |idx, sub_arrays|
    range = 1
    until range > (a.size - idx)
      sub_arrays << a[idx, range]
      range += 1
    end
  end.uniq
end

p two_element_subarrays(a)
p ' '
p all_ranges_subarrays(a)

def three_element_subarrays(a)
  a.each_with_index.with_object([]) do |(element, idx), sub_arrays|
    second_element = idx + 1
    until second_element == a.size
      third_element = second_element + 1
      until third_element == a.size
        sub_arrays << [element, a[second_element], a[third_element]]
        third_element += 1
        p "third element: #{third_element}"
      end
      second_element += 1
      p "second element: #{second_element}"
    end
  end
end