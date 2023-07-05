def reduce(array, acc = omitted = true)
  acc = omitted ? array[0] : acc
  idx = omitted ? 1 : 0

  while idx < array.size
    acc = yield(acc, array[idx])
    idx += 1
  end

  acc
end

array = [1, 2, 3, 4, 5]

p reduce(array) {|acc, curr| acc + curr}
p reduce(array, &:*)

p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
# p reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass
p reduce(array, &:*)


p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']

