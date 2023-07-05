=begin
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

Assume this rule is good for any year greater than year 0. Write a method that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

Problem
Given a year as integer greater than 0, if the year is divisible by 4, return true, unless the year is also divisible by 100, in which case return false. If, however the years is divisible by both 100 and 400, return true.

Data Structures
input: integer

output: boolean

Algorithm:
1. see if number is evenly divisible by 4.
if so
  if the number is divisible by 100
    if the number is divisible by 400
      return true
    else
      return false
    end
  else
    return true
  end
else
  return false

def leap_year?(year)
  if year % 4 == 0
    if year % 100 == 0
      if year % 400 == 0
        return true
      else
        return false
      end
    else
      return true
    end
  else
    return false
  end
end


=end

def leap_year?(year)
  if year % 4 != 0
    false
  elsif year % 100 != 0
    true
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true