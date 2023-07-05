
KEY = ('0'..'9').to_a.zip(0..9).to_h.merge(('a'..'f').to_a.zip(10..15).to_h)

def string_to_number(str)
  counter = 0
  number = 0
  
  loop do
    number = (number * 10) + KEY[str[counter]]
    counter += 1
    break if counter == str.size
  end

  number
end

def split_sign_and_number(str)
  sign = ''

  if str[0] == '+' || str[0] == '-'
    sign = str[0]
    str[0] = ''
  end

  [sign, str]
end

def string_to_signed_integer(str)
  sign, str = split_sign_and_number(str)
  
  number = string_to_number(str)

  return number *= -1 if sign == '-'
  number
end

def hexadecimal_to_integer(hex)
  final_num = 0
  hex_chars = hex.downcase.chars

  hex_chars.each { |num| final_num = (final_num * 16 + KEY[num]) }

  final_num
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100