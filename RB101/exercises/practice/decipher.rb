def decipher_this(message)
  arr = message.split
  arr.map do |code|
    digit = code.gsub(/[A-z]/,'')
    word = code.gsub(/\d/, '')
    digit = digit.to_i.chr
    if word.size > 1
      word[0], word[-1] = [word[-1], word[0]]
    end
    digit + word
  end.join(' ')
end

p decipher_this('72olle 103doo 100ya') == 'Hello good day'
p decipher_this('82yade 115te 103o') == 'Ready set go'
p decipher_this('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') == 'Have a go at this and see how you do'
p decipher_this('72')