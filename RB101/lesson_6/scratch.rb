array = [[[1, 2], [3, 4]], [5, 6], [1, 1], [[2, 3],[8, 9]]]

p (
array.map do |arr|
  arr.map do |element|
    if element.class == Array
      element.map do |el|
        el + 1
      end
    else
      element + 1
    end
  end
end
)

