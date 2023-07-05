# def letter_percentages(string)
#   lowercase = ('a'..'z').to_a
#   uppercase = ('A'..'Z').to_a
#   result = {}
#   num_low = 0
#   num_high = 0
#   neither = 0

#   string.chars.each do |let|
#     if lowercase.include?(let)
#       num_low += 1
#     elsif uppercase.include?(let)
#       num_high += 1
#     else
#       neither += 1
#     end
#   end

#   total = num_low + num_high + neither.to_f

#   result[:uppercase] = num_high/total * 100
#   result[:lowercase] = num_low/total * 100
#   result[:neither] = neither/total * 100

#   result
# end



# p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
# p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
# p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }


def remove_vowels(arr)
  vowels = %w(a e i o u)
  
  arr.map! do |str|
    str.chars.reject do |chr|
      vowels.include?(chr.downcase)
    end.join
  end
  arr
end

VOWELS = "aeiouAEIOU"

def remove_vowels(arr)
  arr.map! do |str|
    str.delete(VOWELS)
  end
end



p remove_vowels(['abcdefghijklmnopqrstuvwxyz']) ==['bcdfghjklmnpqrstvwxyz']
p remove_vowels(['green', 'YELLOW', 'black', 'white']) == ['grn', 'YLLW', 'blck', 'wht']
p remove_vowels(['ABC', 'AEIOU', 'XYZ']) == ['BC', '', 'XYZ']