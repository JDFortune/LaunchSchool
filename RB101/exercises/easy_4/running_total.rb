# given an array. return a new array where the element is the sum of itself and previous elements

# input: array of integers 
# output: new array of integers

# algorithm:
# iterate throught the at each index add the elements ofr the preivous indexes to the current indexes element. Return the new array

=begin
set sum = 0
set counter = 0
set new array = []
loop
  sum += array[counter]
  new_array << sum
  counter += 1
  break if counter == array.size
end

=end
# def running_total(array)
#   array.map.with_index do |element, idx|
#     element + array[0...idx].sum
#   end
# end

def running_total(array)
  array.map.with_index do |element, idx|
    array[0..idx].inject(:+) # or just #sum
  end
end

def running_total(array)
  sum = 0
  counter = 0
  new_array = []
  loop do
    return new_array if array.empty?
    sum += array[counter]
    new_array.push(sum)
    counter += 1
    break if counter == array.size
  end

  new_array
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []
