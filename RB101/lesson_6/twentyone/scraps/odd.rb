# def solve(s) 
#   s.size.times.with_object([]) do |index, array|
#     length = 1
#     until length > s.size - index
#       array << s[index, length]
#       length += 1
#     end
#   end.map(&:to_i).count(&:odd?)
# end

# p solve("1341") == 7
# p solve("1357") ==10
# p solve("134721") == 13
# p solve("1347231") == 20
# p solve("13472315") == 28

# PUNCTUATION = %w(- ' , .)

# def get_punct_and_index(word)
#   punctuation = []
#   word.chars.each.with_index do |chr, idx|
#     marker = []
#     if !chr.match? /[a-z]/
#       marker << chr
#       marker << idx
#     end
#     punctuation << marker unless marker.empty?
#   end
#   punctuation
# end

# def scramble(word)
#   word[1..-2] = word[1..-2].chars.sort.join
#   word
# end

# def add_punct(word, punctuation)
#   until punctuation.empty?
#     punc, idx = punctuation.shift
#     word.insert(idx, punc)
#   end
#   word
# end

# def scramble_words(str) 
#   str_array = str.split(' ')

#   str_array.map do |word|
#     punctuation = get_punct_and_index(word)
#     punctuation.each do |punct, _|
#       word.delete!(punct)
#     end
#     word = scramble(word)
#     add_punct(word, punctuation)
#   end.join(' ')
# end

# p scramble_words('professionals') == 'paefilnoorsss'
# p scramble_words('i') == 'i'
# p scramble_words('') == ''
# p scramble_words('me') == 'me'
# p scramble_words('you') == 'you'
# p scramble_words('card-carrying') == 'caac-dinrrryg'
# p scramble_words("shan't") == "sahn't"
# p scramble_words('-dcba') == '-dbca'
# p scramble_words('dcba.') == 'dbca.'
# p scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") == "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."


# def rotate(array)
#   n_array = array.dup
#   n_array.push(n_array.shift)
# end

# def rotate_rightmost_digits(num, target)
#   num_array = num.digits.reverse
#   rotation = num_array.pop(target)
#   backend = rotate(rotation)
#   num_array << backend
#   num_array.join.to_i
# end

# def max_rotation(num)
#   str_num = num.to_s.chars
#   index = 0
#   until index >= str_num.size - 1
#     str_num[index..-1] = rotate(str_num[index..-1])
#     index += 1
#   end
#   str_num.join.to_i
# end

# p max_rotation(735291) == 321579
# p max_rotation(3) == 3
# p max_rotation(35) == 53
# p max_rotation(105) == 15 # the leading zero gets dropped
# p max_rotation(8_703_529_146) == 7_321_609_845

def valid?(string)
  unless string.empty?
    # return false if number?(string[-1])
    # return false if letter?(string[0])

    words = string.gsub(/\d/, ' ').split
    nums = string.gsub(/[a-z]/, ' ').split
    return false if nums.size > words.size || number?(string[-1])
    string_lengths = nums.zip(words)

    string_lengths.each do |length, word|
      return false if word.size != length.to_i
    end
  end

  true
end

def number?(string)
  string.match? /[0-9]/
end

def letter?(string)
  string.match? /[a-z]/
end




p valid?("3hey5hello2hi") == true
p valid?("4code13hellocodewars") == true
p valid?("3hey5hello2hi5") == false
p valid?("code4hello5") == false
p valid?("1a2bb3ccc4dddd5eeeee") == true
p valid?("") == true