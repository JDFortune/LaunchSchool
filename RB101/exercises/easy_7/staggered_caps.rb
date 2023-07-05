=begin
given string uppercase the every other letter of each word, starting with an uppercase. do nothing with non letters but have them count towards the upper lowercasing

input string
output new string

iterated through characters
  if current character is a letter and the index is odd
    uppercase
  if current character is a letter and index is even
    lowercase
  else
    skip
  
return new string


def staggered_case(string, first_up = true)
  result = ''
  switch_up = first_up
  string.chars.each.with_index do |chr, idx|
    if switch_up == true
      result << chr.upcase
    elseif 
      result << chr.downcase
    end
    switch_up = !switch_up
  end
  result
end


def staggered_case(string, first_up = true)
  switch = !first_up
  string.chars.map do |chr|
    (switch = !switch) ? chr.upcase : chr.downcase
  end.join
end

=end

# def staggered_case(string)
#   string.chars.map.with_index do |chr, idx|
#     if chr =~ /[A-z]/ && idx.even?
#       chr.upcase
#     elsif chr =~ /[A-z]/ && idx.odd?
#       chr.downcase
#     else
#       chr
#     end
#   end.join
# end

# set cap_tracker = true
# iterate through characters of a string return characters
#   if the current character is a letter
#     if cap_tracker == true
#       upcase
#       switch cap_tracker
#     else
#       downcase
#       switch cap_tracker
#   if not a letter
#     put character
# represent the characters as a string again


# def staggered_case001(string)
#   cap = true
#   string = string.chars
#   string.map! do |chr|
#     if chr =~ /[A-z]/
#       if cap == true
#         cap = !cap
#         chr.upcase
#       else
#         cap = !cap
#         chr.downcase
#       end
#     else
#       chr
#     end
#   end.join
# end

def staggered_case(string, ignore_non_letters = true, upcase_first = true)
  index = 0
  loop do
    if ignore_non_letters
      unless string[index] =~ /[^A-z]/
        upcase_first ?
          string[index] = string[index].upcase :
          string[index] = string[index].downcase
        upcase_first = !upcase_first
      end
    else
      upcase_first ?
          string[index] = string[index].upcase :
          string[index] = string[index].downcase
      upcase_first = !upcase_first
    end
    index += 1
    break if index == string.size
  end
  string
end
      




p staggered_case('I Love Launch School!') #== 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') #== 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') #== 'IgNoRe 77 ThE 444 nUmBeRs'
