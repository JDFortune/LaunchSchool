arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]

# sort by elements
#   if element is odd

b = arr.sort_by do |element|
      element.select do |el|
        el.odd?
      end
    end

p b