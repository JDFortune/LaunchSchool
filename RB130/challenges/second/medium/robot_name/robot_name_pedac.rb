Notes:
-Robot names cannot be used twice
- factory reset, whipes name, but you cannot randomly generate the same name
  - account for all names that every have been given.
- no two robots can have the same name
  -so the class needs to share a list of all existing names.
- when we whipe a robot name, it can be removed from the list of used names

Problem:
create a robot class that generates a robot name (exAA888)



Layout
class Robot
class variable = names
instance methods
  - initialize
  - name (getter)
  - reset
  - name_generator



Algorithms:

name_generator
 set new generated name
 while name exists in @@names
  reassign new generated name
 end
 return name

name
 unless name instance variable exists
   set name instance to generated name
 end
 return name


reset
  - remove current name from @@names
  