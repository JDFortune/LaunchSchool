# def leading_substrings(string)
#   string.chars.each_index.with_object([]) { |index, array| array << string[0..index] }
# end

# def substrings(string)
#   result = []
#   0.upto(string.size) do |index|
#     current_string = string[index..-1]
#     result << leading_substrings(current_string)
#   end
#   result.flatten
# end

# def palindromes(string)
#   substrings = substrings(string).select { |subs| subs.size > 1 }
#   result = []
#   substrings.each do |subs|
#     result << subs if subs.downcase == subs.downcase.reverse
#   end
#   result
# end

# p palindromes('abcd') == []
# p palindromes('madam') == ['madam', 'ada']
# p palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# p palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# def palindromes(string)
#   (0...string.size).each.with_object([]) do |index, substrings|
#     (1..string.size - index).each do |length|
#       substrings << string[index, length]
#     end
#   end.select do |subs|
#     subs.delete("^A-z0-9").size > 1 &&
#     subs.delete("^A-z0-9").downcase == subs.delete("^A-z0-9").downcase.reverse
#   end
# end

# p palindromes('ab99cd') #== []
# p palindromes('madam') == ['madam', 'ada']
# p palindromes('hello-madam-did-madam-goodbye') #== [
# #   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
# #   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
# #   '-madam-', 'madam', 'ada', 'oo'
# # ]
# p palindromes('knitting cassettes') #== [
# #   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# # ]

def banger(array)
  array.map do |arr|
	arr.map do |element|
	  if element.class == Array
	    element.map do |string|
		    string + '!'
		  end
	  else
	    element + '!'
	  end
	end
  end	
end

a = [[['fire', 'in'], ['the', 'hole']], ['other', 'words']]

p banger(a)