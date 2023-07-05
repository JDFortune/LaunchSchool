# my_proc = proc { |a, b| a <=> b }

# other_proc = Proc.new {|b| puts b}

# p my_proc
# p other_proc

# def my_method(&block)
#   block.call
# end

# # a = my_method {|a| puts a}

# # b = my_method
# # p a

# # p b


def convert_to_base_8(n)
  n.to_s(8).to_i
end

base8_proc = method(:convert_to_base_8).to_proc

p [8, 10, 12, 14, 16, 33].map(&base8_proc)

p (1 * (2 ** 4)) + (2 * (2**3)) + (3 * (2 **2)) + (4 * (2**1)) + (5 * (2 ** 0))

p ((1 * (8**2)) + (1 * (8**1)) + 2)

p 112.to_s(8)