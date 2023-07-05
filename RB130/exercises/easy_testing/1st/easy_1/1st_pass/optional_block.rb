def compute(arg = 'default')
  block_given? ? yield(arg) : "Does not compute."
end

def compute(arg = 'default', &block)
  block_given? ? block.call(arg) : "Does not compute."
end

p compute(8) {|arg| arg + 9 }

puts compute {|arg| "arg is \#{#{arg}}"}

chars = :chars.to_proc

p compute('hello', &chars)
p compute('hello', &:to_i)
p compute('nope')
p compute