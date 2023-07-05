UPPER = ('A'..'Z').to_a
LOWER = ('a'..'z').to_a

def letter_percentages(string)
  len = string.size
  percentages = {}
  percentages[:lowercase] = string.count('a-z').fdiv(len)*100
  percentages[:uppercase] = string.count('A-Z').fdiv(len)*100
  percentages[:neither] = (100 - (percentages[:lowercase] + percentages[:uppercase]))

  percentages
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }