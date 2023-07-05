# Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth. 
# problem:
# input is a string which may contain brackest and other characters
# output are the substrings inclosed in the greatest depth
# - () come in sets, opening and closing
# - substrings within () will  have an equal number befor and after
# - innermost substrings will have the most () before and after
# - substrings don't include () within them

# ex:
# "AA(XX((YY))(U))" == ["YY"]
=begin
Given a string with letter characters and Parantheses. Treating parenthesis as creating deeper layers, find the Letter characters within the deepes layer of the string and push them as elements into a new array. Return the array of letter characters from the deepest layer.

Rules:
There can be multiple seperate strings (combination of one or more Letter characters) at the same level of depth within the given string.
LETTERS are uppercase
empty strings will need to return a array with 1 element (empty string)

input: String
inner structures and variables:
  count for the largest depth of parentheses
  Array to store the strings at deepest
  string to store current inner string while determining the when the depth ends
output: array of the innermost strings

Algorithm:
iterate through the string to determin the deepest layer of the String. Using the depth, tracker, reiterate through the string, placing letter from the deepest depth into a string holder and pushing the string into a result array as we emerge from the depths

Low-level
SET results array to []
SET depth_count to 0
set intermittend_count = 0
iterate through each character in the given String
  if character is '('
    if intermittent_count == depth_count
      increase depth count by 1
      increase intermittent count by 1
    else
    increase intermittnet count by 1
  elsif the character si ')'
    decrease intermittent count by 1
  end

string_storer = ''
set a ( tracker for placing deepest strings to 0
iterate back through strin
  if character is '('
    add one to tracker
  end
  if tracker is equal to depth count
      if string is a letter character
        push letter into string_storer
      elsif chr ')'
        push string storer into results array
        subtract 1 from tracker
        reset string storer to '')
      end

return results array
=end


def strings_in_max_depth(string)
  result = []
  depth_count = 0
  intermittent_count = 0
  string.chars.each do |chr|
    if chr == '('
      if intermittent_count == depth_count
        intermittent_count += 1
        depth_count += 1
      else
        intermittent_count += 1
      end
    elsif chr == ')'
      intermittent_count -= 1
    end
  end

  if depth_count == 0
    result << string
  end

  string_storer = ''
  tracker = 0
  string.chars.each do |chr|
    if chr == '('
      tracker += 1
    end
    if tracker == depth_count
      if chr.match?(/[A-Z]/)
        string_storer << chr
      elsif chr == ')'
        result << string_storer
        string_storer = ''
      end
    end
    if chr == ')'
      tracker -= 1
    end
  end
  result
end


p strings_in_max_depth("AA(XX((YY))(U))") == ["YY"]
p strings_in_max_depth("((AAX(AB)(UP)F(Z))(HH))") == ['AB', 'UP', 'Z']
p strings_in_max_depth("FB(TAIHJK(NZZCGDZXKF(SYMBLACQ)SBJMRFM)PRTRX(JCLYCOXIMOKGGIE)MWIOIJDCLXDSQFHK)WLVYSMNNHIGKR(MOIZLOT(RWMAVXSJQROHJ(GZURPPOQJVMYCE(VCPXSHXQ)LETIEWE(CBC)AAHEEO)NZHIGXBSJATXV)BSBYCMKFFAFZIK(KECNRQ)PIIQZGIDMLNQRQS)VGXXBYD") == ['VCPXSHXQ', 'CBC']
p strings_in_max_depth("AAA") == ["AAA"]
p strings_in_max_depth("") == [""]