=begin
def palindrome?(string)
  string == string.reverse
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true

def palindromic_array?(array)
  array == array.reverse
end

p 'new'
p palindromic_array?([1,2,3,4,3,2,1]) == true

def multi_purpose_crazy_string_and_array_palindromic_detector(item)
  item == item.reverse
end

=end

def palindrome?(item)
  new_item = item.class.new
  reverse_counter = (item.size - 1)

  while reverse_counter >= 0
    new_item += item[reverse_counter]
    reverse_counter -= 1
  end

  new_item == item
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true