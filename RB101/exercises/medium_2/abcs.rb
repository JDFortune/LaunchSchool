=begin
check if current letter's counter letter is in the whole string
if so return false. else move onto the next letter
=end

# CHART = %w(b x d c n g r f j h v l z).zip(%w(o k q p a t e s w u i y m)).to_h

# def block_word?(word)
#   word.each_char do |letter|
#     if CHART.keys.include?(letter.downcase)
#       return false if word.downcase.include?(CHART[letter.downcase])
#    elsif CHART.values.include?(letter.downcase)
#       return false if word.downcase.include?(CHART.key(letter.downcase))
#    end
#   end
#   true
# end

BLOCKS = %w(BO XK DQ CP NA GT RE FS JW HU VI LY ZM)

def block_word?(word)
  up_dog = word.upcase

  BLOCKS.each do |block|
    return false if up_dog.count(block) >= 2
  end
  true
end

p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true
p block_word?('BAATTCH') == false