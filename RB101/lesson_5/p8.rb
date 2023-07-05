hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

# given a hash with the keys values being arrays of string
# access each value
# access each element of the array
# iterate through the characters of the string only outputting the vowels
VOWELS = 'aeiouAEIOU'

def vowel(hash)
  hash.each do |_key, value|
    value.each do |word|
      word.chars.each do |chr|
        puts chr if VOWELS.include?(chr)
      end
    end
  end
end

vowel(hsh)