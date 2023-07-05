# take the sum of the numbers and divide it by the total number of inputs
# return a string value that correllates to a range that the averaged number could be in

# given array of numbers
# set average to sum and divide by the length of array
# output by case

def get_grade(*int)
  average = int.sum / int.size

  case average
  when (90..) then 'A'
  when 80..89  then 'B'
  when 70..79  then 'C'
  when 60..69  then 'D'
  else              'F'
  end
end



p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"