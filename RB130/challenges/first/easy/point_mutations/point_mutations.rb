class DNA
  def initialize(seq)
    @seq = seq
  end

  def hamming_distance(other_seq)
    short, large = [@seq, other_seq].sort_by(&:size)
    (0...short.size).count { |idx| short[idx] != large[idx] }
  end    
end