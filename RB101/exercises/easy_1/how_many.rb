=begin
PEDAC

Problem
Given an array of strings, count the number of occurences of each specific string and return the number of occurences for each string.

Implicit Rules
each string needs an integer count associated with it (hash)
the count of each string is returned on separate lines


Explicit Rules
- strings are case sensitive
- elements will be given in the form of an array

questions:
Are all arrays strings (yes?)

Edge cases, empty array

-------------

Data Structures

input: array of strings

output: hash

--------------

Algorithm

potential solutions
1. create a hash with a key for each unique element. iterate through the array and add 1 to the values of the given elements key for each occurence of the elemtent within the given array. Return the Hash

2. create a variable array for unique elements of given array. iterate through unique array and print the number of occurences of the current element within the original, given array.

1.
SET uniq_arr = original array unique elements
SET count_hash to empty hash
iterate through uniq_arr
  add unique array element as key to count_hash setting value equal to zero
iterate through original array
  for each element in the array
    add 1 to the value of that elements corresponding key, in the hash
PRINT the hashes keys 

2.
SET uniq_arr = unique elements in original array
iterate through unique array
  PRINT element_name => occurence of element name in original array
=end


# CODE
# Solution 1

# def how_many?(array)
#   uniq_arr = array.uniq
#   count_hash = {}
  
#   uniq_arr.each do |name|
#     count_hash[name] = 0
#   end

#   array.each do |element|
#     count_hash[element] += 1
#   end

#   count_hash.each do |key,value|
#     puts "#{key} => #{value}"
#   end
# end

def count_occurences(array)
  array.uniq.each { |word| puts "#{word} => #{array.count(word)}" }
end


vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurences(vehicles)

array=[]

count_occurences(array)

vehicles2 = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck','suv'
]

def count_occurences_insensitive(array)
  array.map!(&:downcase).uniq.each do |word|
    puts "#{word} => #{array.count(word)}"
  end
end

count_occurences_insensitive(vehicles2)