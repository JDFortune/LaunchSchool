class Anagram
  def initialize(word)
    @word = word.downcase
  end

  def match(list)
    list.select do |w|
      w.downcase != word && anagram?(w, word)
    end.sort
  end

  private

  attr_reader :word

  def sort_word(str)
    str.downcase.chars.sort.join
  end

  def anagram?(word1, word2)
    sort_word(word1) == sort_word(word2)
  end
end
