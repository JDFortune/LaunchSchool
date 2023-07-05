# def penultimate(string)
#   string.split[-2]
# end

# p penultimate('last word') == 'last'
# p penultimate('Launch School is great!') == 'is'

def middle_words(string)
  return string if string.split.size <= 2
  string = string.split
  string.size.even? ?
    string[(string.size / 2) - 1, 2].join(' ') :
    string[(string.size/2)]
end

p penultimate('last word') #== 'last'
p penultimate('Launch School is great! today') #== 'is'
p penultimate('This is four words')