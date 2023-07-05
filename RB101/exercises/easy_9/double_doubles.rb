# taking a integer

# if the integer length is even and the left half matches the right half
#   return the integer
# else return the integer * 2

def twice(int)
  int_string = int.to_s
  digit_split = int_string.size / 2
  int_string[0, digit_split] == int_string[digit_split..-1] ?
    int :
    int * 2
end
      
p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10