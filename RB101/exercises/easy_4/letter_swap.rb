=begin
split string of words into individual words
swap first and last characters.


split sentend into individual words
for each word
  set first and last letters of each word
  replace first letter with last
  replace last letter with first
join back into sentence

print the word


=end

# def switch_first_last_characters(word)
#   word[0], word[-1] = word[-1], word[0]
#   word
# end

# def swap_first_last_characters(a, b)
#   a, b = b, a
# end

# def swap(string)
#   list = string.split

#   list.map! do |word|
#     word[0], word[-1] = word[-1], word[0]
#     word
#   end

#   list.join(' ')
# end

# def swap(string)
#   string.split.each {|wrd| wrd[0], wrd[-1] = wrd[-1], wrd[0]}.join(' ')
# end

p swap('Oh what a wonderful day it is') #== 'hO thaw a londerfuw yad ti si'
p swap('Abcde') #== 'ebcdA'
p swap('a') #== 'a'