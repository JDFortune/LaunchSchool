# given an array of words

# iterate through the list of words
# tally the current word and reference the list
# push into a new array any words whose tally matches the tally of the current word
# sort the new array of arrays and delete duplicates
# output the contents of the array on each line



# def anagrams(words)
#   result = []
#   words.each do |word|
#     current = words.select do |test|
#                 word.chars.tally == test.chars.tally
#               end
#     result << current.sort
#   end
  
#   result.uniq.each do |anagrams|
#     p anagrams
#   end
# end

# def anagrams(words)
#   result = {}

#   words.each do |word|
#     key = word.chars.sort.join
#     if result.has_key?(key)
#       result[key].push(word)
#     else
#       result[key] = [word]
#     end
#   end
#   p result
#   result.each do |_,v|
#     p v
#   end
# end

def anagrams(words)
  result = words.group_by {|word| word.chars.sort.join }
  result.each {|_,v| p v if v.size > 1 }
end


words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']


anagrams(words)