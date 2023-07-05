class Boomerang
  def self.boomerang?(arr)
    arr.each_cons(2) { |a, b| return false if a == b }
    dir = (0...arr.size - 1).map { |idx| arr[idx] < arr[idx + 1] ? :up : :down }
    dir.chunk_while { |a, b| a == b }.to_a.size == 2
  end
end
