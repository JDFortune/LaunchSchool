def balanced?(string)
  characters = {
                square: 0,
                curly: 0,
                pars: 0
                }
  quotes = {
            single: 0,
            double: 0
            }
            
  string.each_char do |char|
    characters[:pars] += 1 if char == '('
    characters[:pars] -= 1 if char == ')'
    characters[:square] += 1 if char == '['
    characters[:square] -= 1 if char == ']'
    characters[:curly] += 1 if char == '{'
    characters[:curly] -= 1 if char == '}'
    quotes[:single] += 1 if char == "'"
    quotes[:double] += 1 if char == '"'
    break if characters.values.any? {|value| value < 0 }
  end

  characters.values.all?(0) && quotes.values.all?(&:even?)
end



p balanced?('What{}[[]] (is) this?') == true
p balanced?('What }{ is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false