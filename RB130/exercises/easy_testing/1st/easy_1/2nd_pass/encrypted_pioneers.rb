def rotate(letter)
  ord = letter.ord
  case ord
  when 97..109, 65..77 then  (ord + 13).chr
  when 110..122, 78..97 then (ord - 13).chr
  else                        ord.chr
  end
end


File.readlines('pioneers.txt', chomp: true).each do |name|
  decrypted_name = name.chars.map do |letter|
                      rotate(letter)
                    end.join
  puts decrypted_name
end