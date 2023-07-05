## SUBARRAY Variations

#Create an method for grabbing all subarrays of a specific number of elements
#Make it transeferable and easy to add different numbers of elements

def two_subs(array)
  sub_arrays = []
  0.upto(array.size - 2) do |idx_1|
    (idx_1 + 1).upto(array.size - 1) do |idx_2|
      sub_arrays << [array[idx_1], array[idx_2]]
    end
  end
  sub_arrays
end

puts "2 subs"
p two_subs([1, 2, 3, 4, 5])

def three_element_array(array)
  sub_arrays = []
  0.upto(array.size - 3) do |idx_1|
    (idx_1 + 1).upto(array.size - 2) do |idx_2|
      (idx_2 + 1).upto(array.size - 1) do |idx_3|
        sub_arrays << [array[idx_1], array[idx_2], array[idx_3]]
      end
    end
  end
  sub_arrays.map(&:join)
end

puts "3 element all subarrays"
p three_element_array("abcd")


def four_element_array(array)
  sub_arrays = []
  0.upto(array.size - 4) do |idx_1|
    (idx_1 + 1).upto(array.size - 3) do |idx_2|
      (idx_2 + 1).upto(array.size - 2) do |idx_3|
        (idx_3 + 1).upto(array.size - 1) do |idx_4|
          sub_arrays << [array[idx_1], array[idx_2], array[idx_3], array[idx_4]]
        end
      end
    end
  end
  sub_arrays
end

puts "4 element all subarrays"
p four_element_array([1, 2, 3, 4, 5, 6, 7, 8])
# #sub_arrays(2 elements)
# change lines 17, 

def subs(array)
  sub_arrays = []
  0.upto(array.size - 1) do |idx_1|
    (1).upto(array.size - idx_1) do |idx_2|
      sub_arrays << array[idx_1, idx_2]
    end
  end
  sub_arrays
end
puts "String subs"
p subs("hello good")
