class Scrabble
  SCORES = { AEIOULNRST: 1, DG: 2, BCMP: 3, FHVWY: 4, K: 5, JX: 8, QZ: 10 }

  def initialize(string)
    @string = string.is_a?(String) ? string.gsub(/[^a-z]/i, '').upcase : ''
  end

  def score
    @string.chars.map { |chr| letter_point(chr) }.sum
  end

  def self.score(word)
    new(word).score
  end

  private

  def letter_point(letter)
    SCORES[SCORES.keys.find { |set| set.to_s.include?(letter) }]
  end
end