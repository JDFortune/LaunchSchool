# given to arrays as arguments
# multiply the elements together according to their index
# return new array of products

# take one array and iterate over the elements with index
# multiply the current element with the element of the 2nd array at index location

# def multiply_list(array1, array2)
#   array1.map.with_index do |el, idx|
#     el * array2[idx]
#   end
# end

# p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# zip the two arrays together
# itarate over array injects * into each array pair

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map { |sub| sub.inject(:*)}
end

p multiply_list([3, 5, 7], [9, 10, 11]) #== [27, 50, 77]