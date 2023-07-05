def step(start, finish, increment)
  current = start
  until current > finish
    yield(current)
    current += increment
  end
  (start..finish)
end

puts step(1, 10, 3) { |value| puts "value = #{value}" }