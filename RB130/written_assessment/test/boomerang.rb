class Boomerang
  def self.boomerang?(arr)
    return false if invalid(arr)
    start_dir = arr[0] < arr[1] ? :up : :down
    anchor = start_dir == :up ? arr.max : arr.min
    mult_archs?(start_dir, arr, anchor) ? false : true
  end

  def self.mult_archs?(start_dir, arr, anchor)
    (arr.index(anchor)...arr.size - 1).any? do |idx|
      if start_dir == :up
        arr[idx] < arr[idx + 1]
      else
        arr[idx] > arr[idx + 1]
      end
    end
  end

  def self.invalid(arr)
    (0...arr.size - 1).any? { |idx| arr[idx] == arr[idx + 1] } ||
      arr.size < 3 ||
      arr.sort == arr ||
      arr.sort.reverse == arr
  end
end

# def self.boomerang?(arr)
#   return false if (0...arr.size - 1).any? {|idx| arr[idx] == arr [idx + 1]}
#   curve_count = 0
#   dir = (0...arr.size - 1).map { |idx| arr[idx] < arr[idx + 1] ? :up : :down }
#   (0...dir.size - 1).each { |idx| curve_count += 1 if dir[idx] != dir[idx + 1] }
#   curve_count == 1
# end

# def self.boomerang?(arr)
#   indexes = (0...arr.size - 1)
#   return false unless indexes.none? { |idx| arr[idx] == arr[idx + 1] }
#   result = []
#   indexes.each do |idx|
#     result << (arr[idx] < arr[idx + 1] ? :up : :down)
#   end
#   result.chunk_while(&SAME).to_a.size == 2
# end