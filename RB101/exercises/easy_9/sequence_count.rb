# def sequence(count, first)
#   num = 0
#   result = []
#   until result.size == count
#     num += first
#     result << num
#   end
#   result
# end

# def sequence(digits, step)
#   num = step
#   digits.times.with_object([]) do |_, array|
#     array << num
#     num += step
#   end
# end

def sequence(digits, step)
  (1..digits).map do |num|
    num * step
  end
end

p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []

# def sequence(count, first)
#   result = []
  