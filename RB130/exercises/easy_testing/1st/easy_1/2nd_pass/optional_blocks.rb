def compute(arg = nil)
  return yield(arg) if block_given?
  'Does not compute.'
end

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'

p compute('hello') {|str| str.upcase }
p compute(4) {|num| num ** 2}
p compute([1, 2, 3]) {|arr| arr << arr.size + 1 }