=begin
Bubble sort

within a loop
  until the switch counter == 0
    set a switch to 0
    set idx1 to 0
    set idx 2 to 0
    until idx2 == the size of the array
      if idx1 is greater than idx 2
        switch location of idx 1 and idx 2 within the array
        add 1 to switch variable
      end
      idx1 += 1
      idx2 += 1
    end
  end
  return the array
=end

def bubble_sort!(array)
  last_index = array.size - 1
  count = 0
  loop do
    switched = false
    1.upto(last_index) do |index|
      count += 1
      next if array[index - 1] <= array[index]
      array[index - 1], array[index] = array[index], array[index - 1]
      switched = true
      last_index = index
    end
    p count
    break unless switched
  end
  nil
end

p a = [4, 3, 2, 5, 1, 8, 9, 3, 44, 76, 22, 13, 67, 18, 17, 81].sort.reverse
p bubble_sort!(a)
p a

p array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
p bubble_sort!(array)
p array