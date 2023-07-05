=begin
create an array of the length of each word
return a hash of the talley of the numbers in the array

=end

# def word_sizes(sentence)
#   sentence.split.map(&:size).tally.sort.to_h
# end


=begin

Set number_size array where each element is the corresponding words length
set an empty hash array
set counter to 0
start a loop
  loop through number size array
  if the corresponding number doesn't have a key in the hash
    add the key and set to 0
  if the key does exist
      add one to its value
  
  sort the hash based off of the keys
  print the hash



=end

# def word_sizes(string)
#   word_lengths = {}
#   return {} if string.empty?

#   number_size = string.split.map do |word|
#                   word.size
#                 end

#   counter = 0

#   loop do
#     if word_lengths.has_key?(number_size[counter])
#       word_lengths[number_size[counter]] += 1
#     else
#       word_lengths[number_size[counter]] = 1
#     end
#     counter += 1
#     break if counter == number_size.size
#   end

#   word_lengths

# end

def word_sizes(string)
  count = Hash.new(0)

  string.split.each do |word|
    word.gsub!(/[^a-zA-Z]/, '')
    count[word.length] += 1
  end

  count
end

# p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# p word_sizes('') == {}

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
p word_sizes('') == {}