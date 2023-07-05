# def string_to_integer(string_num)
#   counter = 0
#   num = 0
#   loop do
#     print string_num[counter].ord - 48
#     counter += 1
#     break if counter == string_num.size
#   end
# end

KEY = ('0'..'9').to_a.zip(0..9).to_h.merge(('a'..'f').to_a.zip(10..15).to_h)

def string_to_integer(str)
  counter = 0
  number = 0
  loop do
    number = (number * 10) + KEY[str[counter]]
    counter += 1
    break number if counter == str.size
  end
end

def hexadecimal_to_integer(hex)
  final_num = 0
  hex_chars = hex.downcase.chars

  hex_chars.each { |num| final_num = (final_num * 16 + KEY[num])}

  final_num
end

###############################
# def str_char_to_int(char)
#   str_to_int_hash = {
#     "0"=> 0, "1"=> 1, "2"=> 2, "3"=> 3, "4"=> 4,
#     "5"=> 5, "6"=> 6, "7"=> 7, "8"=> 8, "9"=> 9,
#     "a"=> 10, "b"=> 11, "c"=> 12, "d"=> 13, "e"=> 14, "f"=>15
#   }
#   str_to_int_hash[char]
# end

# def string_to_integer(str)
#   str.downcase!
#   str_arr = str.chars
#   int = 0
#   str_arr.map! {|char| str_char_to_int(char)}
#   str_arr.reduce {|memo, int| memo*10 + int}
# end

# def hexadecimal_to_integer(str)
#   str.downcase!
#   str_arr = str.chars
#   int = 0
#   str_arr.map! {|char| str_char_to_int(char)}
#   str_arr.reduce {|memo, int| memo*16 + int}
# end

p hexadecimal_to_integer('4D9f') == 19871

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

p hexadecimal_to_integer('397a8')
