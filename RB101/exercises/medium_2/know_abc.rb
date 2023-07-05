# create two arrays of letters split into their left and right blocks

# iterate through the words characters
# check the current character, if word includes its opposite character, return false
# do this for every letter
# return true if no counter letters where in the word

# CHECKLIST = %w(b x d c n g r f j h v l z).zip(%w(o k q p a t e s w u i y m)).to_h

# p CHECKLIST

# def block_word?(word)
#   word_dc = word.downcase

#   word_dc.chars.each do |char|
#     if CHECKLIST.keys.include?(char)
#       return false if word_dc.include?(CHECKLIST[char])
#     elsif CHECKLIST.values.include?(char)
#       return false if word_dc.include?(CHECKLIST.key(char))
#     end
#   end
#   true
# end

# p block_word?('BATCH') == true
# p block_word?('BUTCH') == false
# p block_word?('jest') == true

BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM).freeze

def block_word?(string)
  up_string = string.upcase
  BLOCKS.none? { |block| up_string.count(block) >= 2 }
end

