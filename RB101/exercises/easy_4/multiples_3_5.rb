=begin
Write a method that searches for all multiples of 3 or 5 that lie between 1 and some other number, and then computes the sum of those multiples. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).


Given a number greater than, return the sum of all numbers within the given number and 1 that are multiples of 3 and 5


Algroithm
SET number range 1..num
SET sum_nums = []
for numbers in range
  if num % 3 == 0
    add num to sum_nums
  elsif num % 5 == 0
    add to sum_nums array
  end
PRINT the sum of sum_nums
=end 

# def multisum(num)
#   sum_nums = []
#   (1..num).each do |num|
#     sum_nums << num if num % 3 == 0 || num % 5 == 0
#   end

#   sum_nums.sum
# end

# p multisum(3) == 3
# p multisum(5) == 8
# p multisum(10) == 33
# p multisum(1000) == 234168



array = %w(hello goodbye goodnight)
hash = {}

array.each do |word|
  hash[word] = word.length
end

new_hash =
  hash.select do |_,v|
    v > 5
  end

p new_hash
