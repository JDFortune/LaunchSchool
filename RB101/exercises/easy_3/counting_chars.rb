# puts "Please write word or multiple words: "
# input = gets.chomp
# count = input.gsub(' ','').chars.count

# puts "There are #{count} characters in \"#{input}\"."

# given an array


def find_even_index(array)
  array.each_with_index do |element, index|
    return index if array[0...index].sum == array[index+1..-1].sum 
  end
  -1
end


p find_even_index([1,2,3,4,3,2,1]) == 3
p find_even_index([1,100,50,-51,1,1]) == 1
p find_even_index([1,2,3,4,5,6]) == -1
p find_even_index([20,10,30,10,10,15,35]) == 3
p find_even_index([20,10,-80,10,10,15,35]) == 0
p find_even_index([10,-80,10,10,15,35,20]) == 6
p find_even_index([-1,-2,-3,-4,-3,-2,-1]) == 3
p find_even_index([1,0]) == 0

