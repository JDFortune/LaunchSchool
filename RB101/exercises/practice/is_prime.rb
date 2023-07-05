=begin
Problem

given an integer, return true or false based on whether or not the integer is prime.

conditions:
if integer is less than 2 return false


data structures
input: integer (positive, negative, or zero)
output: boolean (isPrime?)

iterate through all numbers from 2 to the given number
if the mod of the given number and the iterative number is 0
  return false
return true, if no operations return 0

=end

# def isPrime?(num)
#   return false if num < 2

#   (2...num).each do |mod|
#     if num % mod == 0
#       return false
#     end
#   end
#   true
# end

def isPrime(num)
  return false if num < 2
  
  2.upto(Math.sqrt(num)) do |mod|
    unless mod == num
      return false if num % mod == 0
    end
  end
  
  true
end
# require 'prime'

# def isPrime(num)
#   num < 2 ? false : (2..Math.sqrt(num)).none?{|i| num%i == 0}
# end


p isPrime(0)
p isPrime(-1)
p isPrime(2)
p isPrime(5)
p isPrime(7)
p isPrime(12314567201)