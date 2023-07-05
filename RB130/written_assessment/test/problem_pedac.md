Problem:
Write a program that deals with boomerang arrays
- boomerang arrays consist of a sequence of increasing numbers followed by a sequence of decreaing numbers, or vice versa


Class:
Boomerang

Methods:
class methods:
boomerang?

Rules:
- a boomerang can't repeat the a number twice in a row
it can only go up once and only down once?
  - meaning it must only change direction once
  - must have at least 3 elements to do this

Algorithm:

return false if array size is less than 3
return false if array.sort == array or array.sort.reverse == array
test that an array goes up and then down

if up set anchor to max

if down set anchor to min
start at anchor
  if direction == :up
    return false if next element greater than or equal to 

there can only be one anchor point


if direction is max there can only be 1 max


if next is greater than current, set direction to :up, else set to :down
set switch to 0
iterate through array
  return false if current is equal to next
  if direction = :up
    next if current < next ele
    set direction to :down
    switch += 1
  else
    next if current > next ele
    set direction to :up
    switch += 1
  end
end
  

if starting direction is up. Find anchor
iterate from andchor to end
  if direction was :up
    return false, if current < next
  else
    return false if current > next
  end
return true
    

    
