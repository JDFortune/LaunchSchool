=begin
write a method that takes and array and returns a new array containing two nested arrays. with the elements of the first array split in half into the two nested arrays. if the size of the original array is odd, the middle number gets put into the first array.

input array
middle 2 arrays
output array with two nested arrays

given an array
set a counter to 0
set first_half array
set second_half array
while counter is less than or equal to half the size of the array (rounded up to nearest whole integer)
  push the corresponding elements of the array into a new array
  add one to counter
while counter is less than the size of the original array
  push corresponding elements of the array into another array
  add one to counter
push both of the new arrays into another array and return
=end

def halvsies(array)
  counter = 0
  first_half = []
  second_half = []

  while counter < (array.size / 2.0).ceil
    first_half << array[counter]
    counter += 1
  end

  while counter < array.size
    second_half << array[counter]
    counter += 1
  end

  p first_half
  p second_half
end


p halvsies([1, 2, 3, 4]) #== [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) #== [[1, 5, 2], [4, 3]]
p halvsies([5]) #== [[5], []]
p halvsies([]) #== [[], []]