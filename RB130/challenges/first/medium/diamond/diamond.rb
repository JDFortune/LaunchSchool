# class Diamond
#   def self.make_diamond(letter)
#     order = letter.ord
#     start = 65
#     diff = (start - order).abs
#     center_pad = 0
#     diamond = Array.new((diff * 2) + 1).map {" " * (diff * 2)}
#     top = true
#     diamond = diamond.each do |layer|
#                 layer[diff] = start.chr
#                 layer[diff + center_pad] = start.chr
#                 if top
#                   diff -= 1
#                   center_pad += 2
#                   start += 1
#                   top = false if start.chr == letter
#                 else
#                   diff += 1
#                   center_pad -= 2
#                   start -= 1
#                 end
#               end.map{|x| x + "\n"}.join

#     diamond
#   end
# end


# p Diamond.make_diamond("B")


# create a diamond array that is the size of the difference from A to (n)'s ord number * 2 + 1

# given letter for diamond center
# set `layers` to one more than (A's ord - letters ord) absolute diff multiplied by 2
# set diamond to array with layers number of elements push string of layer spaces into each element position
# SET left to layers / 2
# SET right to layers / 2
# SET top to true
# set letter to A 

# iterate over each element in layers
#   reassign left idx of layer to letter
#   reassign right idx of layer to letter
#   if top is true
#     decrement left by 1
#     increment right by 1
#     reassign letter to 1 higher letter
#     set top to false if left is equal to 0
#   else
#     increment left by 1
#     decrement right by 1
#     reassign letter to 1 lower letter
#   end
# end

# push "\n" onto the end of each string in diamond array and join

# ouput combined diamond string

# class Diamond

#   def self.make_diamond(letter)
#     layers = ("A".ord - letter.ord).abs * 2 + 1
#     diamond = Array.new(layers).map{" " * layers}
#     right = left = layers / 2
#     top = true
#     current = 'A'

#     diamond.each do |layer|
#       layer[left] = layer[right] = current
#       if top
#         left -= 1
#         right += 1
#         current = (current.ord + 1).chr
#         top = false if left == 0
#       else
#         left += 1
#         right -= 1
#         current = (current.ord - 1).chr
#       end
#     end
#     diamond.map { |x| x + "\n" }.join
#   end
# end

# p Diamond.make_diamond('C')

class Diamond

  def self.make_diamond(letter)
    layers = ("A".ord - letter.ord).abs * 2 + 1
    diamond = Array.new(layers).map{" " * layers}
    @right = @left = layers / 2
    @top = true
    @current = 'A'

    diamond.each do |layer|
      layer[@left] = layer[@right] = @current
      @top ? iterate_top : iterate_bottom
    end.map { |x| "#{x}\n" }.join
  end

  def self.iterate_top
    @left -= 1
    @right += 1
    @current = (@current.ord + 1).chr
    @top = false if @left == 0
  end

  def self.iterate_bottom
    @left += 1
    @right -= 1
    @current = (@current.ord - 1).chr
  end
end

# puts Diamond.make_diamond('E')