=begin
taking in string of alphabetic and non-alphabetic characters, replace any non-alphabetic characters with a space. Consecutive n/a characters should be replaced with only one space



=end

# def cleanup(string)
#   alpha = ('a'..'z').to_a
#   group = []
#   new_st = []
#   string.chars.each do |chr|
#     new_st << chr if !alpha.include?(chr)
#     if alpha.include?(chr)
#       group << new_st.join('')
#     new_st = ''
#   end

#   p group
#  # group.map! { |el| if }
#   #new.map! { |group| group.gsub(/[^a-z]/, ' ')}
#   #new.join('')
# end

# def cleanup(string)
#   string.gsub(/[^a-z]/, ' ').gsub(/\s+/, ' ')
# end

# ALPHABET = ('a'..'z').to_a

# def cleanup(string)
#   clean_string = []
  
#   string.chars.each do |chr|
#     if ALPHABET.include?(chr)
#       clean_string << chr
#     else
#       clean_string << ' ' unless clean_string.last == ' '
#     end
#   end

#   clean_string.join
# end

ALPHA = ('a'..'z').to_a << ' '

# def cleanup(string)
#   new_string = string.chars.select do |elem|
#     ALPHA.include?(elem)
#   end
#   new_string.join.gsub(/\s+/, ' ')
# end

def clean_str(string)
  string = string.chars
  clean_string = []
  string = string.map { |char| ('a'..'z').include?(char) ? char : char = ' ' }
  string.each do |char|
    if char != ' '
      clean_string << char
    elsif char == ' ' && clean_string[-1] != ' '
      clean_string << char
    end
  end
  clean_string.join
end

def cleanup(str)
  str = str.split(' ').map { |word| clean_str(word) }.select { |w| w != ' ' }.join(' ')
  str
end

p cleanup("---what's my +*& line?") #== ' what s my line '