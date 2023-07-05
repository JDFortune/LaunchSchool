# create a results array
# n number of times push a number into the results array starting at 1 and ending at n

def sequence(num)
  num > 0 ? (1..num).to_a : (num..1).to_a
end

p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(1) == [1]
p sequence(0)
p sequence(-1)
p sequence(-10)