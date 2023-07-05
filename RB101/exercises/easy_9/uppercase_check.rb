def uppercase?(string)
  string == string.upcase
end

def uppercase?(string)
  string.include()

p uppercase?('t') == false
p uppercase?('T') == true
p uppercase?('Four Score') == false
p uppercase?('FOUR SCORE') == true
p uppercase?('4SCORE!') == true
p uppercase?('') == true