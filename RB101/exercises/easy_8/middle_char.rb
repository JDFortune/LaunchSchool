# set mid_idx at divide string size by 2
# return the string is the size is less than one
# if string size is odd, resturn letter at mid_idx
# else two letters starting at mid_idx

def center_of(string)
  mid_idx = string.size / 2
  string.size.odd? ? string[mid_idx] : string[mid_idx - 1, 2]
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'