=begin
split string into individual words
iterate over words
  capitolize words and return to a new array
combine back into a string

def word_cap(string)
  string = string.split
  string.map do |word|
    word.capitalize
  end.join(' ')
end


def word_cap(string)
  string.split.map(&:capitalize).join(' ')
end
=end

# split into individual words
# iterated through words
#   upcase the first element
# join words into string



# split into words
# iterate over words
#   split into characters and iterate
#     if index is 0
#       if the letter is a key in the comparelist
#         replace it with the corresponding value
#       end
#     else
#       if the letter is a value in compare
#         replace it with the corresponding key
#       end
#     end
#     rejoin the characters
# join the string with a space
    
def word_cap(string)
  string.split.map { |word| word[0].upcase + word[1..-1].downcase }.join(' ')
end

UPCASE = ('A'..'Z').to_a
DOWNCASE = ('a'..'z').to_a

COMPARE = DOWNCASE.zip(UPCASE).to_h


def word_cap(string)
  string = string.split
  string.map! do |words|
    words.chars.map!.with_index do |chr, idx|
      
      if idx == 0
        if COMPARE.key?(chr)
          chr = COMPARE[chr]
        else
          chr
        end
      else
        if COMPARE.value?(chr)
          chr = COMPARE.key(chr)
        else
          chr
        end
      end
    end.join

  end.join(' ')
end




p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'