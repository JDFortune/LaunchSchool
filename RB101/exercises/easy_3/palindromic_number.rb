# def palindrome?(input)
#   input == input.reverse
# end


# def palindromic_number?(integer)
#   palindrome?(integer.to_s)
#   p integer
# end


def palindromic_number?(num)
  reversed = 0
  number = num
  until num == 0
    last_digit = num % 10
    reversed = (reversed * 10) + last_digit
    num = num / 10
  end
  return true if reversed == number
end

p palindromic_number?(34543) == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true
p palindromic_number?(0001000)


# option without converting to a string
def palindromic_num?(num)
  reversed = 0
  number = num
  until num == 0
    last_digit = num % 10
    reversed = (reversed * 10) + last_digit
    num = num / 10
  end
  return true if reversed == number
end